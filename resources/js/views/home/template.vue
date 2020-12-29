<template>
    <div class="row justify-content-center mt-5">
        <div class="col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Actualizacion de Datos
                    </h3>
                </div>
                <form id="update-form" @submit.prevent="update">
                    <div class="card-body">
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
                    <div class="card-footer">
                        <button type="submit" :disabled="busy" class="btn btn-success">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>
