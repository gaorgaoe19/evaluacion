<template>
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="register-form" @submit.prevent="register">
            <div class="modal-body">
                <div class="mb-3">
                    <label for="email" class="col-form-label">Nombre y Apellido</label>
                    <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="input-r-name"
                        v-model="name"
                        :class="errors.name.status ? 'is-invalid' : ''"
                    >
                    <div class="invalid-feedback">
                        {{ errors.name.msg }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email" class="col-form-label">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="input-r-email"
                        v-model="email"
                        :class="errors.email.status ? 'is-invalid' : ''"
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
                        class="form-control"
                        v-model="password"
                        id="input-r-password"
                        :class="errors.password.status ? 'is-invalid' : ''"
                    >
                    <div class="invalid-feedback">
                        {{ errors.password.msg }}
                    </div>
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Confirmar Contraseña</label>
                    <input
                        type="password"
                        name="password_confirmation"
                        v-model="password_confirmation"
                        class="form-control"
                        id="input-r-password"
                    >
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" :disabled="busy" class="btn btn-success">Resgistrar</button>
            </div>
        </form>
    </div>
</template>

<script src="./script.js"></script>
