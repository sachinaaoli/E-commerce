import { Carousel } from 'antd';
import React from 'react';
import { Item } from '../../utiles/Payment';

const Carousal = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 80,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
  };

  return (
    <div style={{ padding: '1.5rem 0', backgroundColor: 'rgba(0, 0, 0, 0.55)', backdropFilter: 'blur(3px)' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
        <Carousel {...settings}>
          {Item.map((item) => {
            return (
              <div key={item.id}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '0.65',
                    backdropFilter: 'blur(3px)',
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '150px',
                  }}
                >
                  <img src={item.image} alt="clothe" style={{ height: '180px', opacity: '0.95' }} />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousal;
