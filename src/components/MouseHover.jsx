import ImageTrail from './ImageTrail/ImageTrail'

const MouseHover = () => {
  const key = "image-trail-1"; // Añadimos esta línea para definir key
  
  return (
    <div className='mouse-hover'>
    <ImageTrail
        key={key}
        items={[
        '/hover-mouse-img/1.svg',
        '/hover-mouse-img/2.svg',
        '/hover-mouse-img/3.svg',
        '/hover-mouse-img/4.svg',
        '/hover-mouse-img/5.svg',
        '/hover-mouse-img/6.svg',
        '/hover-mouse-img/7.svg',
        '/hover-mouse-img/8.svg',
        '/hover-mouse-img/9.svg',
        '/hover-mouse-img/10.svg',
        '/hover-mouse-img/11.svg',
        '/hover-mouse-img/12.svg',
        '/hover-mouse-img/13.svg',
        '/hover-mouse-img/14.svg',
        '/hover-mouse-img/15.svg',
        '/hover-mouse-img/16.svg',

        // ...
        ]}
        variant={7}
    />
    </div>
  )
}

export default MouseHover