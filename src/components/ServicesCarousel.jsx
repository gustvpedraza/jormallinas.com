import FlowingMenu from './FlowingMenu/FlowingMenu.jsx'



const ServicesCarousel = () => {
    const demoItems = [
        { link: '#form', text: 'Diseño Multimedia', image: 'servicios-icon-1.svg', imageHover: 'servicios-hover-1.svg', position: 'right' },
        { link: '#form', text: 'Prototipado', image: 'servicios-icon-2.svg', imageHover: 'servicios-hover-2.svg', position: 'left' },
        { link: '#form', text: 'Desarrollo Web', image: 'servicios-icon-3.svg', imageHover: 'servicios-hover-3.svg', position: 'right' },
        { link: '#form', text: 'Diseño UX/UI', image: 'servicios-icon-4.svg', imageHover: 'servicios-hover-4.svg', position: 'left' }
      ];
  return (
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
  )
}

export default ServicesCarousel



