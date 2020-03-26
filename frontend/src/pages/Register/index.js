import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    
    function handleRegister() {

    }
    
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                       <FiArrowLeft size={16} color="#E02041" />
                       Não tenho cadastro 
                    </Link>
                </section>
                
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome" type="text"/>
                    <input placeholder="Email" type="email"/>
                    <input placeholder="WhatsApp" type="text"/>
                    <div className="input-group">
                        <input placeholder="Cidade" type="text"/>
                        <input placeholder="UF" type="text" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}