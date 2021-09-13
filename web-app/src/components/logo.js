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
      <ul className="logo_image">
        <img src="/logo_atlant.png" className="logo_image1" />
        <img src="/logo_ford.png" className="logo_image2" />
      </ul>
    </image>
  );
}
