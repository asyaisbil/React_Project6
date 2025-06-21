export default function UserList(props) {
  const { kullanicilar } = props;

  return kullanicilar.map((kullanici, index) => {
    return (
      <div key={index}>
        {kullanici.adSoyad}
      </div>
    )
  });
}