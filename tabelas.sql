
-- ============================================
-- BANCO DE DADOS: FinanMEI (Nancify)
-- ============================================

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS finanmei_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Usar o banco de dados criado
USE finanmei_db;

-- ============================================
-- TABELA: usuarios
-- Ajustes: renomear senha -> senha_hash; remover índice redundante
-- ============================================
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,  -- guarde hash (ex.: bcrypt), nunca senha em texto
    nome_empresa VARCHAR(255),
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: contas (NOVA - essencial para separar Caixa/Banco/Carteira)
-- ============================================
DROP TABLE IF EXISTS contas;
CREATE TABLE contas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    tipo ENUM('CAIXA','BANCO','CARTEIRA') NOT NULL DEFAULT 'BANCO',
    saldo_inicial DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_contas_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE,

    INDEX idx_contas_usuario (usuario_id)
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: categorias (NOVA - essencial para relatórios por categoria)
-- ============================================
DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    tipo ENUM('Receita','Despesa') NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_categorias_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE,

    UNIQUE KEY uq_categoria_usuario (usuario_id, nome, tipo),
    INDEX idx_categorias_usuario (usuario_id)
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: transacoes
-- Ajustes: adicionar conta_id, categoria_id, pago; índice composto (usuario_id, data_transacao);
--          validar valor > 0
-- ============================================
DROP TABLE IF EXISTS transacoes;
CREATE TABLE transacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    conta_id INT NOT NULL,
    categoria_id INT NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    tipo ENUM('Receita', 'Despesa') NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    pago TINYINT(1) NOT NULL DEFAULT 1,           -- 1=liquidada, 0=pendente (a pagar/receber)
    data_transacao DATE NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_transacoes_valor_pos
        CHECK (valor > 0),

    CONSTRAINT fk_transacoes_usuario
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_transacoes_conta
        FOREIGN KEY (conta_id) REFERENCES contas(id)
        ON DELETE RESTRICT,
    CONSTRAINT fk_transacoes_categoria
        FOREIGN KEY (categoria_id) REFERENCES categorias(id)
        ON DELETE RESTRICT,

    -- Índices para melhorar consultas
    INDEX idx_transacoes_usuario (usuario_id),
    INDEX idx_transacoes_data (data_transacao),
    INDEX idx_transacoes_tipo (tipo),
    INDEX idx_transacoes_conta (conta_id),
    INDEX idx_transacoes_categoria (categoria_id),
    INDEX idx_transacoes_usuario_data (usuario_id, data_transacao)  -- comum em filtros por período
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: produtos (como no seu schema original; mantida)
-- ============================================
DROP TABLE IF EXISTS produtos;
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    vendas_totais INT DEFAULT 0,
    lucro_total DECIMAL(10, 2) DEFAULT 0.00,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    INDEX idx_produtos_usuario (usuario_id)
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABELA: vendas_mensais (opcional; mantida)
-- ============================================
DROP TABLE IF EXISTS vendas_mensais;
CREATE TABLE vendas_mensais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    mes INT NOT NULL CHECK (mes BETWEEN 1 AND 12),
    ano INT NOT NULL,
    valor_vendas DECIMAL(10, 2) DEFAULT 0.00,
    quantidade_vendas INT DEFAULT 0,
    lucro_liquido DECIMAL(10, 2) DEFAULT 0.00,

    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE KEY unique_mes_ano (usuario_id, ano, mes),
    INDEX idx_usuario_ano_mes (usuario_id, ano, mes)
) ENGINE=InnoDB COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- FIM DO SCHEMA
-- ============================================
