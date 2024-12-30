<template>
  <form id="form" class="form" @submit.prevent="handleSubmit">
    <label for="name">Nombre completo <span>*</span></label>
    <input 
      type="text" 
      id="name"
      v-model="formData.name"
      placeholder="Escribe tu nombre y apellido"
      :class="{'input-error': errors.name}"
    />
    <span v-if="errors.name" class="error-message">{{ errors.name }}</span>

    <label for="email">Correo electrónico <span>*</span></label>
    <input 
      type="email" 
      id="email"
      v-model="formData.email"
      placeholder="Ejemplo@correo.com"
      :class="{'input-error': errors.email}"
    />
    <span v-if="errors.email" class="error-message">{{ errors.email }}</span>

    <label for="message">Tu mensaje <span>*</span></label>
    <textarea 
      id="message"
      v-model="formData.message"
      placeholder="Escribe tu comentario aquí..."
      :class="{'input-error': errors.message}"
    ></textarea>
    <span v-if="errors.message" class="error-message">{{ errors.message }}</span>

    <button 
      class="primary" 
      type="submit" 
      :disabled="isSubmitting || hasErrors"
    >
      {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
      <i class="projects__icon">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.59375 0.906251L17.3125 0.90625C17.5197 0.90625 17.7184 0.98856 17.8649 1.13507C18.0114 1.28159 18.0938 1.4803 18.0938 1.6875V13.4062C18.0938 13.8377 17.744 14.1875 17.3125 14.1875C16.881 14.1875 16.5312 13.8377 16.5312 13.4062V3.57361L2.23993 17.8649C1.93483 18.17 1.44017 18.17 1.13507 17.8649C0.829976 17.5598 0.829976 17.0652 1.13507 16.7601L15.4264 2.46875L5.59375 2.46875C5.16228 2.46875 4.8125 2.11897 4.8125 1.6875C4.8125 1.25603 5.16228 0.906251 5.59375 0.906251Z"/>
        </svg>
      </i>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitting: false
    }
  },

  computed: {
    hasErrors() {
      return Object.values(this.errors).some(error => error !== '')
    }
  },

  watch: {
    'formData': {
      deep: true,
      handler(newValue) {
        Object.keys(newValue).forEach(field => {
          this.errors[field] = this.validateField(field, newValue[field])
        })
      }
    }
  },

  methods: {
    validateField(name, value) {
      const validations = {
        name: value.length < 1 ? 'El nombre es obligatorio' : '',
        email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Ingresa un correo electrónico válido' : '',
        message: value.length < 1 ? 'Este campo no puede estar vacío, añade un comentario.' : ''
      }
      return validations[name]
    },

    async handleSubmit() {
      this.isSubmitting = true

      const newErrors = Object.keys(this.formData).reduce((acc, key) => ({
        ...acc,
        [key]: this.validateField(key, this.formData[key])
      }), {})

      this.errors = newErrors

      if (!this.hasErrors) {
        await this.submitForm()
      }
      
      this.isSubmitting = false
    },

    async submitForm() {
      try {
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', this.formData)
        this.formData = {
          name: '',
          email: '',
          message: ''
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error)
      }
    }
  }
}
</script>

<style>
  @import '../styles/Form.css';
</style>
