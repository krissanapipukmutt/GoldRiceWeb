import { useEffect, useState } from 'react'

const sections = {
  about: {
    title: 'รู้จัก GoldRice',
    lead:
      'เราคัดสรรข้าวสารออร์แกนิคจากชุมชนเกษตรกรไทย ปลอดสารเคมี ใส่ใจสิ่งแวดล้อม และมุ่งสร้างคุณค่าความยั่งยืนตั้งแต่ต้นน้ำถึงปลายน้ำ',
    points: [
      { icon: '🌾', title: 'ออร์แกนิคแท้', text: 'เพาะปลูกตามหลักเกษตรอินทรีย์ ตรวจสอบย้อนกลับได้' },
      { icon: '🧪', title: 'ปลอดภัย', text: 'ปราศจากสารเคมีตกค้าง ผ่านการคัดคุณภาพทุกล็อต' },
      { icon: '🌍', title: 'ยั่งยืน', text: 'สนับสนุนชุมชนและลดผลกระทบต่อสิ่งแวดล้อม' },
    ],
  },
  values: {
    title: 'ทำไมต้องข้าวออร์แกนิค',
    lead:
      'ข้าวออร์แกนิคดีต่อสุขภาพ ดีต่อเกษตรกร และดีต่อโลก ลดการใช้สารเคมี รักษาความอุดมสมบูรณ์ของดิน และสร้างคุณภาพชีวิตที่ดีขึ้น',
    points: [
      { icon: '💚', title: 'สุขภาพดี', text: 'ลดความเสี่ยงจากสารพิษ สารตกค้าง และแพ้ง่าย' },
      { icon: '👨‍🌾', title: 'ชุมชนเข้มแข็ง', text: 'รายได้เป็นธรรม เกิดระบบเศรษฐกิจท้องถิ่น' },
      { icon: '♻️', title: 'เป็นมิตรสิ่งแวดล้อม', text: 'ลดของเสียและการปล่อยก๊าซเรือนกระจก' },
    ],
  },
}

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const onIntersect = (entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'))
    }
    const io = new IntersectionObserver(onIntersect, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((v) => !v)
  const close = () => setOpen(false)
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-left">
          <div className="brand">
            <a className="brand-link" href="#home" aria-label="GoldRice Home" onClick={close}>
              <img src="picture/Logo GoldRice.jpg" alt="GoldRice Logo" />
              <span className="name">GoldRice</span>
            </a>
            <span className="tag">Organic Rice for Better Living</span>
          </div>
          <button className="nav-toggle" aria-controls="mainmenu" aria-expanded={open} onClick={toggle}>เมนู</button>
        </div>
        <div id="mainmenu" className={`nav-links ${open ? 'open' : ''}`}>
          <a href="#media" onClick={close}>วิดีโอ</a>
          <a href="#about" onClick={close}>เกี่ยวกับเรา</a>
          <a href="#organic" onClick={close}>ออร์แกนิค</a>
          <a href="#products" onClick={close}>สินค้า</a>
          <a href="#impact" onClick={close}>ความยั่งยืน</a>
          <a href="#faq" onClick={close}>คำถามพบบ่อย</a>
          <a href="#contact" className="cta" onClick={close}>ติดตามเรา</a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="badge">🌾 GoldRice — ข้าวออร์แกนิคคุณภาพ</div>
          <h1 className="headline">
            สุขภาพดี เริ่มที่มื้อข้าวดี ๆ
            <br />
            จากทุ่งนาสู่โต๊ะอาหารอย่างยั่งยืน
          </h1>
          <p className="subline">
            เราเชื่อว่าความอร่อยและความปลอดภัยต้องไปด้วยกัน GoldRice คัดสรรข้าวออร์แกนิคจากเกษตรกรไทย
            แปรรูปอย่างพิถีพิถัน เพื่อทุกมื้อที่มั่นใจได้จริง
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">สแกนเพิ่มเพื่อน Line OA</a>
            <a className="btn btn-ghost" href="#about">ดูข้อมูลแบรนด์</a>
          </div>
        </div>
        <aside className="hero-card reveal" aria-label="Brand and partners">
          <img src="picture/SIT_KMUTT.jpg" alt="SIT KMUTT" />
          <div className="card-body">
            <div className="brand" style={{ gap: 12 }}>
              <div>
                <div className="name">GoldRice</div>
                <div className="tag">ร่วมพัฒนากับชุมชนและสถาบันการศึกษา</div>
              </div>
            </div>
            <div className="stat">
              <div className="box"><div className="val">100%</div><div className="label">ออร์แกนิค</div></div>
              <div className="box"><div className="val">ชุมชน</div><div className="label">คุณค่าเพื่อสังคม</div></div>
              <div className="box"><div className="val">ยั่งยืน</div><div className="label">ใส่ใจสิ่งแวดล้อม</div></div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="card reveal">
      <div className="icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function About() {
  const { title, lead, points } = sections.about
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="reveal">{title}</h2>
        <p className="lead reveal">{lead}</p>
        <div className="grid-3">
          {points.map((p, i) => (
            <FeatureCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Organic() {
  const { title, lead, points } = sections.values
  return (
    <section id="organic" className="section">
      <div className="container">
        <h2 className="reveal">{title}</h2>
        <p className="lead reveal">{lead}</p>
        <div className="grid-3">
          {points.map((p, i) => (
            <FeatureCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Impact() {
  return (
    <section id="impact" className="section">
      <div className="container">
        <h2 className="reveal">ความยั่งยืนและชุมชน</h2>
        <div className="grid-2">
          <div className="card reveal">
            <h3>จากชุมชนสู่ผู้บริโภค</h3>
            <p>
              เราทำงานเคียงข้างเกษตรกร สนับสนุนองค์ความรู้และมาตรฐานการผลิต เพื่อคุณภาพชีวิตที่ดีขึ้น และมอบสินค้าที่ดีที่สุดให้ผู้บริโภค
            </p>
            <p>
              โปรดดูเอกสารรายละเอียดในโฟลเดอร์ <code>doc</code> ของโปรเจค (Milestone/Presentation) เพื่อข้อมูลเชิงลึกที่คุณสามารถอัปเดตบนหน้าเว็บนี้ได้ตามต้องการ
            </p>
            <img className="card-illustration" src="picture/product.jpg" alt="ตัวอย่างสินค้า GoldRice" loading="lazy" />
            <div className="hero-actions">
              <a className="btn btn-ghost" href="doc/Milestone 2_Detail.pdf" target="_blank" rel="noopener noreferrer">เปิดเอกสาร Milestone</a>
              <a className="btn btn-ghost" href="doc/Presentation_Milestone_2_Gold%20Rice.pdf" target="_blank" rel="noopener noreferrer">ดูสไลด์โครงการ</a>
            </div>
          </div>
          <div className="gallery reveal logo">
            <img src="picture/poster-goldrice.jpg" alt="Poster GoldRice" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="cta-wrap reveal">
          <div>
            <h2>ติดตามข่าวสารและโปรเจคของเรา</h2>
            <p className="lead">
              เพิ่มเพื่อน Line Official Account เพื่อรับข่าวสาร โครงการเพื่อชุมชน และเรื่องราวจากทุ่งนาถึงโต๊ะอาหาร
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">สแกน QR ที่นี่</a>
              <a className="btn btn-ghost" href="#about">รู้จักเราเพิ่มเติม</a>
            </div>
          </div>
          <div className="qr" aria-label="QR Code Line OA">
              <img src="picture/Qr_code_add_LineOa.png" alt="QR Code Line OA" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div>
          © {year} GoldRice — ข้าวออร์แกนิคเพื่อสุขภาพที่ดีกว่า · สนับสนุนชุมชนเกษตรกรไทย · <a href="#contact">ติดต่อเรา</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useRevealOnScroll()
  return (
    <>
      <Navbar />
      <Hero />
      <Media />
      <About />
      <Organic />
      <Products />
      <Impact />
      <Contact />
      <FAQ />
      <Footer />
    </>
  )
}

function Media() {
  return (
    <section id="media" className="section">
      <div className="container">
        <h2 className="reveal">สื่อวิดีโอ</h2>
        <div className="grid-2">
          <div className="video-wrap reveal">
            <video
              className="video"
              controls
              playsInline
              preload="metadata"
              poster="picture/Logo GoldRice.jpg"
              src="picture/Goldrice_vdo.mp4"
            >
              เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
            </video>
          </div>
          <div className="card media-card reveal">
            <h3>รู้จัก GoldRice ผ่านวิดีโอ</h3>
            <p>
              ชมเรื่องราวแบรนด์ พันธกิจด้านสุขภาพและความยั่งยืน ตลอดจนการทำงานร่วมกับชุมชนเกษตรกรไทย
            </p>
            <p>
              วิดีโอนี้แสดงให้เห็นกระบวนการที่ใส่ใจตั้งแต่ต้นน้ำถึงปลายน้ำ เพื่อให้ทุกมื้อของคุณมั่นใจได้จริง
            </p>
            <div className="chips">
              <span className="chip">พันธกิจ</span>
              <span className="chip">กระบวนการออร์แกนิค</span>
              <span className="chip">ชุมชน & ความยั่งยืน</span>
            </div>
            <ul className="media-meta">
              <li>ข้าวออร์แกนิค 100% ตรวจสอบย้อนกลับได้</li>
              <li>ลดตัวกลาง เพื่อราคาที่เป็นธรรมแก่เกษตรกร</li>
              <li>คัดคุณภาพทุกล็อต พร้อมแนวทางหุงให้อร่อย</li>
            </ul>
            <div className="mini-gallery">
              <figure>
                <img src="picture/middleman.jpg" alt="โครงสร้างห่วงโซ่อุปทาน/ตัวกลาง" loading="lazy" />
                <figcaption>ห่วงโซ่คุณค่าและตัวกลาง</figcaption>
              </figure>
              <figure>
                <img src="picture/Structure_pricing.jpg" alt="โครงสร้างราคา" loading="lazy" />
                <figcaption>โครงสร้างราคาโดยสังเขป</figcaption>
              </figure>
            </div>
            <div className="hero-actions">
              <a className="btn btn-ghost" href="#impact">ดูผลกระทบชุมชน</a>
              <a className="btn btn-primary" href="#products">ดูสินค้าแนะนำ</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="reveal">สินค้า</h2>
        <p className="lead reveal">มี 2 ชนิด และ 2 ขนาด ราคาเท่ากัน: 1 กก. 250 บาท · 5 กก. 1,250 บาท</p>
        <div className="product-grid">
          <article className="card product-card reveal">
            <img className="banner" src="picture/jasmin_surin.png" alt="ข้าวมะลินิลสุรินทร์" loading="lazy" />
            <h3>ข้าวมะลินิลสุรินทร์</h3>
            <ul className="benefits">
              <li>อุดมด้วยแอนโทไซยานิน (สารต้านอนุมูลอิสระ) สีม่วงเข้มตามธรรมชาติ</li>
              <li>ไฟเบอร์สูง ช่วยให้อิ่มนาน และระบบขับถ่ายดีขึ้น</li>
              <li>รสสัมผัสหอมนุ่ม เหมาะกับเมนูไทยและสุขภาพ</li>
            </ul>
            <div className="prices">
              <span className="price-chip">1 กก. 250 บาท</span>
              <span className="price-chip">5 กก. 1,250 บาท</span>
            </div>
          </article>

          <article className="card product-card reveal">
            <img className="banner" src="picture/gaba.png" alt="ข้าวกล้องงอกอินทรีย์ GABA" loading="lazy" />
            <h3>ข้าวกล้องงอกอินทรีย์ GABA</h3>
            <ul className="benefits">
              <li>ผ่านกระบวนการงอก ช่วยเพิ่มกรดอะมิโน GABA ตามธรรมชาติ</li>
              <li>มีแมกนีเซียม วิตามิน และไฟเบอร์ ช่วยสมดุลร่างกาย</li>
              <li>เนื้อสัมผัสนุ่ม เคี้ยวเพลิน เหมาะกับเมนูเพื่อสุขภาพ</li>
            </ul>
            <div className="prices">
              <span className="price-chip">1 กก. 250 บาท</span>
              <span className="price-chip">5 กก. 1,250 บาท</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="reveal">คำถามพบบ่อย</h2>
        <div className="grid-2">
          <div className="reveal">
            <details>
              <summary>ข้าวออร์แกนิคต่างจากข้าวปลอดสารอย่างไร?</summary>
              <p>ออร์แกนิคเน้นทั้งระบบการผลิตตามหลักเกษตรอินทรีย์ ไม่ใช้สารเคมีสังเคราะห์ และมีการตรวจรับรองมาตรฐาน ขณะที่ปลอดสารมักหมายถึงผลลัพธ์ปลอดสารตกค้างโดยไม่ได้กำหนดวิธีการผลิตทั้งหมด</p>
            </details>
            <details>
              <summary>ควรเก็บข้าวอย่างไรให้คงความสดใหม่?</summary>
              <p>เก็บในภาชนะปิดสนิท หลีกเลี่ยงความชื้นและแสงแดด อุณหภูมิคงที่ หากเปิดถุงแล้วควรบริโภคให้หมดภายใน 2-3 เดือน</p>
            </details>
          </div>
          <div className="reveal">
            <details>
              <summary>อัตราส่วนการหุงข้าวที่แนะนำ?</summary>
              <p>ข้าวหอมมะลิ 1:1.1–1.2 น้ำ, ข้าวกล้อง 1:1.6–1.8 พักข้าวหลังหุง 10 นาทีเพื่อความนุ่มอร่อย</p>
            </details>
            <details>
              <summary>ตรวจสอบย้อนกลับได้หรือไม่?</summary>
              <p>เราคัดสรรจากแหล่งปลูกที่ระบุได้และบันทึกล็อตการผลิตอย่างเป็นระบบ เพื่อความโปร่งใสและเชื่อมั่น</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
