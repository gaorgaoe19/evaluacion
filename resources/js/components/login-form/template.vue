<template>
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Acceso</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="login-form" @submit.prevent="login">
            <div class="modal-body">
                <div class="mb-3">
                    <label for="email" class="col-form-label">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        v-model="email"
                        class="form-control"
                        :class="errors.email.status ? 'is-invalid' : ''"
                        id="input-l-email"
                    >
                    <div class="invalid-feedback">
                        {{ errors.email.msg }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        v-model="password"
                        class="form-control"
                        :class="errors.password.status ? 'is-invalid' : ''"
                        id="input-l-password"
                    >
                    <div class="invalid-feedback">
                        {{ errors.password.msg }}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button
                    :disabled="busy"
                    type="submit"
                    class="btn btn-primary"
                >
                    Acceder
                </button>
            </div>
        </form>
    </div>
</template>

<script src="./script.js"></script>
