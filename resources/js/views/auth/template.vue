<template>
    <div class="row justify-content-center">
        <h1 class="home-title">Evaluacion Guillermo</h1>
        <div
            class="d-grid gap-2 d-md-block d-md-flex justify-content-md-center"
        >
            <button
                class="btn btn-outline-primary btn-lg"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#login-modal"
            >
                Acceso
            </button>
            <button
                class="btn btn-success btn-lg"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#register-modal"
            >
                Registro
            </button>
        </div>
        <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <LoginForm></LoginForm>
            </div>
        </div>
        <div class="modal fade" id="register-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <RegisterForm></RegisterForm>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style>
    @import 'styles.css';
</style>
