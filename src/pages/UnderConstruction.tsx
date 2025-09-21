import React from 'react';
import UnderConstructionImg from '../assets/UnderConstruction3.png';

const UnderConstruction: React.FC = () => (
    <div style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
    }}>
        <img
            src={UnderConstructionImg}
            alt="Under Construction"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                zIndex: 0
            }}
        />
        <div style={{
            position: 'relative',
            zIndex: 1,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)'
        }}>
   
        </div>
    </div>
);

export default UnderConstruction;