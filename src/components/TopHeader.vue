<template>
    <div>
        ingreso en
        <span v-if="logeado">logeado</span>
        <span v-else>sin logear</span>
        <div>
            <button @click="salir">cerrar seccion</button>
        </div>
    </div>
</template>

<script>
    import {auth} from '../tools/firebase'
    export default {
        created () {
            auth.onAuthStateChanged(user => {
                this.logeado = !!user;
                // if(user){
                //     this.logeado = true;
                // } else {
                //     this.logeado= false;
                // }
            })
        },
        date () {
            return {
                logeado: false,
            }
        },
        methods: {
            async salir() {
                try {
                    const data = await auth.signOut();
                    console.log(data);
                    this.$router.replace({name: 'login'})
                }catch(err){
                    console.log(err);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>