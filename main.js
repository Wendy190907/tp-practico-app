
// Seleccionar el campo para subir imágenes
const imagenInput = document.getElementById('imagen-file');

// Seleccionar el campo de URL de portada
const portadaInput = document.getElementById('portada');

// Cuando el usuario selecciona una imagen
imagenInput.addEventListener('change', async function () {

    const archivo = imagenInput.files[0];

    if (!archivo) {
        return;
    }

    // Comprobar que sea una imagen
    if (!archivo.type.startsWith('image/')) {
        alert('Por favor, seleccioná una imagen.');
        return;
    }

    // Crear un nombre único para el archivo
    const nombreArchivo = Date.now() + '-' + archivo.name.replace(/[^a-zA-Z0-9._-]/g, '_');

    try {
        // Subir la imagen al bucket portadas
        const { data, error } = await supabase.storage
            .from('portadas')
            .upload(nombreArchivo, archivo);

        if (error) {
            throw error;
        }

        // Obtener la URL pública de la imagen
        const { data: urlData } = supabase.storage
            .from('portadas')
            .getPublicUrl(nombreArchivo);

        // Completar automáticamente la URL de portada
        portadaInput.value = urlData.publicUrl;

        alert('¡Imagen subida correctamente!');

    } catch (error) {
        console.error('Error al subir la imagen:', error);
        alert('No se pudo subir la imagen. Revisá la configuración de Supabase.');
    }
});
