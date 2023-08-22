import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <body>
        <div className=' bg-custom p-1 mb-5 text-warning header'>
          <nav className='row align-items-center'>
            <img src='5-13.jpgw3.webp' width={100} height={60} alt='vergil' className='col-md-1 rounded-circle'></img>
            <a href='/' className='col-md-1 text-center' >หน้าแรก</a>
            <a href='/contact' className='col-md-1 text-center' >ผู้จัดทำ</a>
          </nav>
      </div>
      <div className='container text-center p-1 mb-5'>
        <h1>วิธีทำอาหารญี่ปุ่นยอดฮิต</h1>
      </div>
      <div className='container text-center'>
        <div className='row'>
          <div className='col d-flex flex-column align-items-center p-3 '>
          <img src='ทงสึ.webp' width={100} height={100} alt='ทงสึ' className='rounded-circle'></img>
            <h4>ข้าวหมูทอดทงคัตสึ</h4>
            <p>
            เริ่มกันที่ เมนูอาหารญี่ปุ่น ยอดฮิตอย่าง ข้าวหมูทอดทงคัตสึ ข้าวหมูทอดสไตล์ญี่ปุ่น ที่จะทำให้คุณหลังรักการกินหมูทอด ด้วยสัมผัสที่กรอบนอกนุ่มใน อร่อยได้ในคำเดียว ทำให้เป็นหนึ่งในเมนูยอดนิยมของคนไทยเลยก็ว่าได้ ซึ่งสูตรนี้ได้มาจาก เชฟโฌ เชฟชาวญี่ปุ่นแท้ ๆ เลยทีเดียว รับรองว่า ถ้าทำขาย รสชาติอร่อย ไม่แพ้ร้านอาหารญี่ปุ่นชื่อดังแน่นอน
            </p>
            <button type='button' className='btn btn-secondary'>ดูวิธีการทำ</button>
          </div>
          <div className='col d-flex flex-column align-items-center p-3 '>
            <img src='คัตสึ.webp' width={100} height={100} alt='คัตสึ' className='rounded-circle' ></img>
            <h3>ข้าวหมูทอดคัตสึด้ง</h3>
            <p>
            ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่ แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี
            </p>
            <button type='button' className='btn btn-secondary'>ดูวิธีการทำ</button>
          </div>
          <div className='col d-flex flex-column align-items-center p-3 '>
            <img src='แกงหรี่.webp' width={100} height={100} alt='แกงหรี่' className='rounded-circle' ></img>
            <h3>ข้าวแกงกะหรี่ญี่ปุ่น</h3>
            <p>
            อีกหนึ่งเมนู ข้าวหมูทอด สไตล์ เมนูอาหารญี่ปุ่น ที่อร่อยและเข้มข้นยิ่งขึ้น เมื่อได้แกงกะหรี่รสชาติเข้มข้นมาทานคู่กัน จะทำให้คุณได้เพลิดเพลิน กับทั้งรสชาติของแกงกะหรี่และหมูทอดในมื้อเดียว
            </p>
            <button type='button'  className='btn btn-secondary'>ดูวิธีการทำ</button>
          </div>
        </div>
        <footer className="bg-custom p-1 mb-3 footer container">
        <div className='footer-left'>
          <span style={{ color: "black" }}>&copy; 2023</span> ผู้จัดทำ Nattawut khempan
        </div>
        <div className='footer-right'>
          back to top
        </div>
      </footer>
      </div>
    </body>
  );
}

export default App;
