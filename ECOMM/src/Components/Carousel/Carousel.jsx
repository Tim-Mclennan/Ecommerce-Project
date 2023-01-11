import React from 'react'
import styles from "./Carousel.module.scss";
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={3000} className={styles.Carousel_Item}>
          <a href="/product/HKmqCwnkZGxEOKKhh4dw">
            <img
              className={styles.Carousel_Item_Img}
              src="https://images.acer.com/is/image/acer/Orion_7000_AGW_KSP07?$responsive$"
              alt="Predator Orion 7000"
            />
            <Carousel.Caption className={styles.Carousel_Item_Caption}>
              <h3>Predator Orion 7000</h3>
              <p>Featuring a GeForce RTX 3080 graphics card (10GB video RAM), the Predator Orion 3000 Gaming Desktop delivers crisp, vibrant visuals for an immersive gameplay experience.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={3000} className={styles.Carousel_Item}>
          <a href="/product/aTzkBmg5731vqoBgE9DI">
            <img
              className={styles.Carousel_Item_Img}
              src="https://storage-asset.msi.com/global/picture/image/feature/desktop/Codex-X5-12th/images/KV.jpg"
              alt="MSI Codex X5"
            />
            <Carousel.Caption className={styles.Carousel_Item_Caption}>
              <h3>MSI Codex X5</h3>
              <p>This MSI Gaming Desktop is equipped with an advanced Dragon liquid cooling system, which helps keep itself at optimum temperatures during heavy loads for exceptional performance.</p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item interval={3000} className={styles.Carousel_Item}>
          <a href="/product/3h2HR6I2atwpzgC3YHr1">
            <img
              className={styles.Carousel_Item_Img}
              src="https://i0.wp.com/powerup-gaming.com/wp-content/uploads/2021/04/02_design_1-scaled.jpg?w=1280&ssl=1"
              alt="ROG Strix GA15"
            />
            <Carousel.Caption className={styles.Carousel_Item_Caption}>
              <h3>ROG Strix GA15</h3>
              <p>
              Powered by an AMD Ryzen 5 3600X processor and 16GB RAM, the ROG Strix GA15  Gaming Desktop delivers optimum responsiveness.
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;