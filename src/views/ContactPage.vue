<template>

  <div class="contact"   id="contact">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="label"
  >
  <h3>CONTACT</h3>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="surname"
      :counter="10"
      :rules="surnameRules"
      label="Surname"
      required
    ></v-text-field>

   

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    
    <v-textarea
      autocomplete="email"
      label="Type your message here... "
    ></v-textarea>
  

    <v-btn @click="submit" class="text-color">Submit</v-btn>

  </v-form>
</div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
     
    }),

    methods: {
      submit () {
        // this.$v.$touch()
      },
    }
  }
</script>

<style scoped>
.contact{
  width: 80%;
  height: 700px;
  background: rgb(32 32 32);
  display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 auto;

}
.v-form{
  width: 70%;
  margin: 0 auto;
}
.v-text-field{
  background: rgb(32 32 32);
;
}
.v-field__field{
    background: #3b3737;
border: 1px #404040 solid;
;
}
.v-field--center-affix .v-label.v-field-label,
.v-label.v-field-label{
  color: white;
}
.label{
  color: rgb(162 153 153);
}
.text-color{
  color: black;
}
</style>