<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registrarse
                    </p>
                    <div v-if="error" class="error">{{ error.message }}</div>
                    <form @submit.prevent="register" class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            class="form-control"
                            v-model="name"
                          />
                          <label class="form-label" for="form3Example1c"
                            >Ingresa tu nombre</label
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="email"
                          />
                          <label class="form-label" for="form3Example3c"
                            >Ingresa el correo</label
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            class="form-control"
                            v-model="email"
                          />
                          <label class="form-label" for="form3Example3c"
                            >Ingresa la region</label
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="password"
                          />
                          <label class="form-label" for="form3Example4c"
                            >contrase??a</label
                          >
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="ConfirmPassword"
                            v-model="ConfirmPassword"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example4cd"
                            >Ingresa de nuevo la contrase??a</label
                          >
                        </div>
                      </div>

                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg"
                        >
                          Registrarse
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="
                      col-md-10 col-lg-6 col-xl-7
                      d-flex
                      align-items-center
                      order-1 order-lg-2
                    "
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { auth } from "../tools/firebase";
export default {
  date() {
    return {
      email: "",
      password: "",
      name: "",
      ConfirmPassword: "",
      error: "",
    };
  },
  methods: {
    async register() {
      if (this.password != this.ConfirmPassword) {
        alert("las contrase??as no son iguales");
      }
      try{
        const user = auth.createUserWithEmailAndPassword(this.email, this.password)
        user.then(
            (user) => {
                this.$router.replace({name: "manager"})
                console.log(user)
            },
            (err) => {
                alert("no se pudo completar el registro")
                console.log(err)
                this.$router.replace({name: "register"})
            }
        )
        
        console.log(user)
      }catch(err){
        console.log(err)
      }
    //   const user = auth.createUserWithEmailAndPassword(this.email, this.password).then(
    //         (user) => {
    //         alert("su registro fue exitoso");
    //         console.log(user);
    //         },
    //         (err) => {
    //         console.log(err);
    //         }
    //     );
    },
  },
};
</script>

<style scoped>
</style>