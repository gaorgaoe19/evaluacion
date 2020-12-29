<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Sistema de Evaluacion</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#open-items" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="open-items">
                <ul class="navbar-nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page">{{ user.name }}</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-outline-light" @click="logout">Salir</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
