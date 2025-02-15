import ImageTrail from './ImageTrail/ImageTrail'

const MouseHover = () => {
  const key = "image-trail-1"; // Añadimos esta línea para definir key
  
  return (
    <div className='mouse-hover'>
    <ImageTrail
        key={key}
        items={[
        'servicios-icon-1.svg',
        'servicios-hover-1.svg',
        'servicios-icon-2.svg',
        'servicios-hover-2.svg',
        'servicios-icon-3.svg',
        'servicios-hover-3.svg',
        'servicios-icon-4.svg',
        'servicios-hover-4.svg',
        // ...
        ]}
        variant={5}
    />
    </div>
  )
}

export default MouseHover