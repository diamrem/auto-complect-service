function Logo() {
  return (
    <logo className="logo">
      <Image />
      <ul className="logo_item">
        <a className="logo_link" href="https://atlantm.by/catalog/ford/">
          Автомобили
        </a>
        <a className="logo_link">Сервис</a>
        <a className="logo_link">Запчасти и аксессуары</a>
        <a className="logo_link">Кузовной ремонт</a>
        <a className="logo_link">Финансовые услуги</a>
        <a className="logo_link">Клиентам</a>
      </ul>
    </logo>
  );
}
export default Logo;

function Image() {
  return (
    <image>
      <ul className="logo_image_item">
        <a href="https://atlantm.by/">
          <img src="/logo_atlant.png" className="logo_image" />
        </a>
        <img src="/line1.png" className="logo_image" />
        <a href="https://atlantm.by/catalog/ford/">
          <img
            src="/logo_ford.png"
            className="logo_image"
            href="https://atlantm.by/catalog/ford/"
          />
        </a>
      </ul>
    </image>
  );
}
