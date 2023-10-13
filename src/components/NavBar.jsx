const NavBar = ({handlePrecedent, handleSuivant, precedentHidden, suivantHidden}) => {
    return (
     <>
        <button onClick={handlePrecedent} style={{ display: precedentHidden ? 'none' : 'inline-block' }}>Précédent</button>
        <button onClick={handleSuivant} style={{ display: suivantHidden ? 'none' : 'inline-block' }}>Suivant</button>
     </>
    
    );
};

export default NavBar;