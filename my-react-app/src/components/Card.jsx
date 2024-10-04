function Card() {
  return (
    <div>
      <h1>Card</h1>
      <div className="card">
        <div>
          <img
            className="profile-pic"
            //   src="https://scontent.flgp1-1.fna.fbcdn.net/v/t39.30808-6/426808730_1772419263227662_4287207344409047273_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=wYB03iueLoEQ7kNvgHmDXyx&_nc_ht=scontent.flgp1-1.fna&_nc_gid=Ascb8e7S7wI7i2x5633NYlL&oh=00_AYBQ9MK9i9QuHU9zw0qMl0Rp57f98xzhU2CuqZG0xwIs1A&oe=67019ABC"
            src="https://scontent.flgp1-1.fna.fbcdn.net/v/t39.30808-6/356210619_1643719396097650_5838414012404701587_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=GIorjfk83BIQ7kNvgFhI-bP&_nc_ht=scontent.flgp1-1.fna&_nc_gid=A8KEXuE20LysMBjP4ACsaEK&oh=00_AYB5z1A2jdN8NxrBACKBSwtyhkPLiUt5qcCLuX8apFFV-A&oe=670193B9"
            alt="Profile Picture"
          />
        </div>
        <div className="card-description">
          <div className="price-sec">
            <h2 className="person-name">Maria Albao</h2>
            <h2 className="person-name">$2650</h2>
          </div>
          <p className="person-des">Si Maria gari na tig luwa sawa</p>
          <button className="card-btn">Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
