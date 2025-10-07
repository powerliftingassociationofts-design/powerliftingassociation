
import React from 'react';

const BankAccountDetails = () => {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>



      
      <div style={{
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        height: 180,
        overflow: 'hidden',
        marginTop: 0,
        marginBottom: 0,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <img
          src="/assets/slider/slide2.jpg"
          alt="Bank Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.55) blur(1px)',
            display: 'block',
            pointerEvents: 'none',
            userSelect: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        {/* Overlay for dark effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(30, 30, 60, 0.35)',
          zIndex: 2
        }} />
        {/* Breadcrumbs and Title */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}>
          {/* Breadcrumbs */}
          <div style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: 400,
            letterSpacing: 1,
            marginBottom: 8,
            opacity: 0.95,
            textShadow: '0 2px 8px #232448',
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}>
            <span style={{cursor: 'pointer', textDecoration: 'underline', color: '#fff'}}>Home</span>
            <span style={{margin: '0 4px'}}>/</span>
            <span style={{cursor: 'pointer', textDecoration: 'underline', color: '#fff'}}>About</span>
            <span style={{margin: '0 4px'}}>/</span>
            <span style={{fontWeight: 600, color: '#fff'}}>Bank</span>
          </div>
          {/* Title */}
          <div style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 32,
            letterSpacing: 2,
            textShadow: '0 2px 12px #232448',
            marginTop: 8
          }}>
            BANK
          </div>
        </div>
      </div>

      {/* Centered Divider below banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 32, marginBottom: 32 }}>
        <div style={{ flex: 1, height: 2, background: '#e0e0f7', maxWidth: 120 }} />
        <div style={{ padding: '0 32px', fontWeight: 600, fontSize: 20, letterSpacing: 2, color: '#23248b', textShadow: '0 2px 8px #fff', opacity: 0.7 }}>BANK</div>
        <div style={{ flex: 1, height: 2, background: '#e0e0f7', maxWidth: 120 }} />
      </div>

      {/* Bank Account Card */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
        <div
          style={{
            background: '#fff',
            borderRadius: 24,
            boxShadow: '0 8px 32px 0 rgba(80,60,180,0.15)',
            border: '4px solid transparent',
            padding: '40px 48px',
            maxWidth: 800,
            width: '100%',
            position: 'relative',
            transition: 'box-shadow 0.3s, border-color 0.3s',
            textAlign: 'left',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#23248b';
            e.currentTarget.style.boxShadow = '0 0 32px 0 #23248b, 0 2px 8px 0 rgba(35,36,139,0.10)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(80,60,180,0.15)';
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: '#232323', marginBottom: 28, textAlign: 'center' }}>
            Powerlifting India Bank Account
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ color: '#232323', fontSize: 18 }}><b>Name of the account:</b> Powerlifting India</div>
            <div style={{ color: '#232323', fontSize: 18 }}><b>Name of the Bank:</b> Canara Bank</div>
            <div style={{ color: '#232323', fontSize: 18 }}><b>Account number:</b> 41002010044758</div>
            <div style={{ color: '#232323', fontSize: 18 }}><b>IFSC Code:</b> CNRB0000702</div>
            <div style={{ color: '#232323', fontSize: 18 }}><b>Address:</b> Alappuzha, Kerala</div>
          </div>
          {/* Watermark icon */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', bottom: 18, right: 18, opacity: 0.12 }}>
            <rect x="3" y="7" width="18" height="10" rx="2" stroke="#23248b" strokeWidth="1.5" />
            <rect x="7" y="11" width="2" height="2" rx="1" fill="#23248b" />
            <rect x="11" y="11" width="2" height="2" rx="1" fill="#23248b" />
            <rect x="15" y="11" width="2" height="2" rx="1" fill="#23248b" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BankAccountDetails;