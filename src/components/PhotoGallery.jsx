import photo1 from '../assets/photos/photo1.jpg'
import photo2 from '../assets/photos/photo2.jpg'
import photo3 from '../assets/photos/photo3.jpg'
import photo4 from '../assets/photos/photo4.jpg'
import photo5 from '../assets/photos/photo5.jpg'
import photo6 from '../assets/photos/photo6.jpg'
import photo7 from '../assets/photos/photo7.jpg'

const photos = [
  { src: photo1, caption: 'just being cute' },
  { src: photo2, caption: 'pizza date' },
  { src: photo3, caption: 'dessert run' },
  { src: photo4, caption: 'burger & smiles' },
  { src: photo5, caption: 'matching caps' },
  { src: photo6, caption: 'that little kiss' },
  { src: photo7, caption: 'caught mid-laugh' },
]

export default function PhotoGallery() {
  return (
    <section>
      <div className="card">
        <h2>Us, in a few favorite moments</h2>
        <p className="sub">A few of my favorite moments with you.</p>
        <div className="photo-grid">
          {photos.map((p, i) => (
            <div className="photo-frame" key={i}>
              <img src={p.src} alt={p.caption} />
              <div className="cap">{p.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
