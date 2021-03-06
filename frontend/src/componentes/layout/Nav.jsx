import React from 'react';


export default () => (
    <>
        <div>
            <ul id="cadastros" className="dropdown-content">
                <li><a href="/app/ambienteList">Ambiente</a></li>
                <li><a href="/app/disciplinaList">Disciplina</a></li>
                <li><a href="/app/equipamentoList">Equipamento</a></li>
                <li><a href="/app/funcaoList">Função</a></li>
                <li><a href="/app/usuarioList">Usuário</a></li>
            </ul>
            <ul id="configs" className="dropdown-content">
                <li><a href="/">Sair</a></li>
            </ul>
            <ul id="relatorios" className="dropdown-content">
                <li><a href="/">Laboratório mais utilizado no mês</a></li>
                <li><a href="/">Qual professor utilizou mais um determinado laboratório</a></li>
            </ul>
            <ul id="agendamento" className="dropdown-content">
                <li><a href="/app/agendamento_ambiente">Ambientes</a></li>
                <li><a href="/">Equipamentos multimídia</a></li>
            </ul>
            <nav className="blue darken-4">
                <div className="nav-wrapper">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/app/dashboard">Dashboard</a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="cadastros">Cadastros<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="agendamento">Agendamentos<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="relatorios">Relatórios<i className="material-icons right">arrow_drop_down</i></a></li>
                        <li><a className="dropdown-trigger" href="#!" data-target="configs"><i className="material-icons right">settings</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
)