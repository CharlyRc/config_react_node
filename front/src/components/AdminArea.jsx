import {NavLink} from "react-router-dom";

const AdminArea = () => {

    return(
        <main className="container">
            <h2>Votre espace admin</h2>
            <ul className="admin">
                <li>
                    <NavLink to="/productsAdmin">
                    Votre boutique (modif,suppression)
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/addProduct">
                    Ajouter un produit à votre boutique
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/actualitesAdmin">
                    Votre actualité (modif,suppression)
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addArticle">
                    Ajouter un article dans votre actualité
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/listContact">
                    Vos messages de la page contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/listAdmin">
                    Modifier/supprimer vos administrateurs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/createAccount">
                    Créer un nouveau compte
                    </NavLink>
                </li>
            </ul>
        </main>
    );
};

export default AdminArea;