import { useState } from "react"

const Galeria = () => {
    const [galeriaAbierta, setGaleriaAbierta] = useState(false)

    const handleAbrirGaleria = () => {
        setGaleriaAbierta(true)
    }

    const images = []


    return (
        <>
            <button onClick={handleAbrirGaleria}>Mira las fotos de nuestros encuentros</button>
            {galeriaAbierta && (
                <section className="overlay" onClick={onClose}>
                    <article
                        className="gallery-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="gallery-thumbnails">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Gallery thumbnail ${index + 1}`}
                                    className="thumbnail-image"
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                        {selectedImage && (
                            <section className="overlay">
                                <article className="enlarged-image-container">
                                    <img
                                        src={selectedImage}
                                        alt="Selected"
                                        className="enlarged-image"
                                    />
                                    <button
                                        className="close-selected"
                                        onClick={handleCloseSelected}
                                    >
                                        &times;
                                    </button>
                                </article>
                            </section>
                        )}
                        <button className="close-gallery" onClick={onClose}>
                            &times;
                        </button>
                    </article>
                </section>
            )}
        </>
    )
}

export default Galeria