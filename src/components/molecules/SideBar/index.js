import React from 'react'

export default function SideBar(){
    return (
        <div style={sideBarWrap}>
            <div style={profilWrap}>
                <div style={circle}></div>
                <div>
                    <p style={bodyText}>Febrianto</p>
                    <span style={spanText}>Super Admin</span>
                </div>
            </div>
            <div className="mt-4">
                <div style={wrapNavItem}>
                    <i class="fas fa-th-large"></i>
                    <p style={textNav}>Dashboard</p>
                </div>
            </div>
            <div className="mt-4">
                <div style={wrapNavItem}>
                    <i class="fas fa-th-large"></i>
                    <p style={textNav}>Dashboard</p>
                </div>
            </div>
            <div className="mt-4">
                <div style={wrapNavItem}>
                    <i class="fas fa-th-large"></i>
                    <p style={textNav}>Dashboard</p>
                </div>
            </div>
            <div className="mt-4">
                <div style={wrapNavItem}>
                    <i class="fas fa-th-large"></i>
                    <p style={textNav}>Dashboard</p>
                </div>
            </div>
            <div className="mt-4">
                <div style={wrapNavItem}>
                    <i class="fas fa-th-large"></i>
                    <p style={textNav}>Dashboard</p>
                </div>
            </div>
        </div>
    )
}

const textNav = {
    margin: '0 0 0 16px',
};

const wrapNavItem = {
    display: 'flex',
    flexDirection: 'row',
    padding: '8px 16px',
    alignItems: 'center'
}

const sideBarWrap = {
    zIndex: 1,
    position: 'absolute',
    alignItems: 'center',
    width: '272px',
    height: '100%',
    backgroundColor: '#fff',
    top: 0
}

const profilWrap = {
    widht: '100%',
    padding: '16px 8px 16px 24px',
    display: 'flex',
    flexDirection :'row',
    alignItems: 'center',
    borderBottom: '1px solid #333'
}

const circle = {
    width: '48px',
    height: '48px',
    marginRight: '14px',
    borderRadius: '40px',
    backgroundColor: '#333'
}

const bodyText = {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold'
}

const spanText = {
    fontSize: '12px',
    position: 'relative',
    top: '-4px'
}