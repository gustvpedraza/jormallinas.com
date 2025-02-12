import { useState, useEffect } from 'react';
import '../styles/Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    // Nuevo estado para controlar la interacción del usuario
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateField = (name, value) => {
        const validations = {
            name: value.length < 1 ? 'El nombre es obligatorio' : '',
            email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Ingresa un correo electrónico válido' : '',
            message: value.length < 1 ? 'Este campo no puede estar vacío, añade un comentario.' : ''
        };
        return validations[name];
    };

    // Equivalente al watcher de Vue
    useEffect(() => {
        const newErrors = {};
        Object.keys(formData).forEach(field => {
            newErrors[field] = validateField(field, formData[field]);
        });
        setErrors(newErrors);
    }, [formData]);

    const hasErrors = Object.values(errors).some(error => error !== '');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const submitForm = async () => {
        try {
            const endpoint = "https://submit-form.com/zAuBuFwux";
            const formBody = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
                mode: "no-cors",
            });

            window.location.href = "/ty";
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Hubo un error inesperado. Por favor, intenta de nuevo.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors = Object.keys(formData).reduce((acc, key) => ({
            ...acc,
            [key]: validateField(key, formData[key])
        }), {});

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error !== '')) {
            await submitForm();
        }

        setIsSubmitting(false);
    };

    return (
        <form id="form" className="form" onSubmit={handleSubmit} name="contact">
            <label htmlFor="name">Nombre completo <span>*</span></label>
            <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => setTouched({...touched, name: true})}
                placeholder="Escribe tu nombre y apellido"
                className={touched.name && errors.name ? 'input-error' : ''}
            />
            {touched.name && errors.name && <span className="error-message">{errors.name}</span>}

            <label htmlFor="email">Correo electrónico <span>*</span></label>
            <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => setTouched({...touched, email: true})}
                placeholder="Ejemplo@correo.com"
                className={touched.email && errors.email ? 'input-error' : ''}
            />
            {touched.email && errors.email && <span className="error-message">{errors.email}</span>}

            <label htmlFor="message">Tu mensaje <span>*</span></label>
            <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => setTouched({...touched, message: true})}
                placeholder="Escribe tu comentario aquí..."
                className={touched.message && errors.message ? 'input-error' : ''}
            />
            {touched.message && errors.message && <span className="error-message">{errors.message}</span>}

            <button 
                className="primary" 
                type="submit" 
                disabled={isSubmitting || hasErrors}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                <i className="projects__icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.59375 0.906251L17.3125 0.90625C17.5197 0.90625 17.7184 0.98856 17.8649 1.13507C18.0114 1.28159 18.0938 1.4803 18.0938 1.6875V13.4062C18.0938 13.8377 17.744 14.1875 17.3125 14.1875C16.881 14.1875 16.5312 13.8377 16.5312 13.4062V3.57361L2.23993 17.8649C1.93483 18.17 1.44017 18.17 1.13507 17.8649C0.829976 17.5598 0.829976 17.0652 1.13507 16.7601L15.4264 2.46875L5.59375 2.46875C5.16228 2.46875 4.8125 2.11897 4.8125 1.6875C4.8125 1.25603 5.16228 0.906251 5.59375 0.906251Z"/>
                    </svg>
                </i>
            </button>
        </form>
    );
};

export default Form;
