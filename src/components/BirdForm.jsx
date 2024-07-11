import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "../styles/BirdForm.module.css";
const BirdForm = ({ onClose, addBird }) => {
  const [formData, setFormData] = useState({
    name: "",
    latin_name: "",
    habitat: "",
    description: "",
    image: "",
    family: "",
    order: "",
    status: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addBird(formData);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>Add Bird</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Bird Name"
            required
          />
          <input
            type="text"
            name="latin_name"
            value={formData.latin_name}
            onChange={handleInputChange}
            placeholder="Latin Name"
            required
          />
          <input
            type="text"
            name="habitat"
            value={formData.habitat}
            onChange={handleInputChange}
            placeholder="Habitat"
            required
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
          />
          <div className={styles.dropdownContainer}>
            <select
              name="family"
              value={formData.family}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Family
              </option>
              <option value="Accipitridae">Accipitridae</option>
              <option value="Alcedinidae">Alcedinidae</option>
              <option value="Anatidae">Anatidae</option>
              <option value="Apodidae">Apodidae</option>
              <option value="Ardeidae">Ardeidae</option>
              <option value="Caprimulgidae">Caprimulgidae</option>
              <option value="Certhiidae">Certhiidae</option>
              <option value="Charadriidae">Charadriidae</option>
              <option value="Ciconiidae">Ciconiidae</option>
              <option value="Columbidae">Columbidae</option>
              <option value="Corvidae">Corvidae</option>
              <option value="Cuculidae">Cuculidae</option>
              <option value="Falconidae">Falconidae</option>
              <option value="Fringillidae">Fringillidae</option>
              <option value="Haematopodidae">Haematopodidae</option>
              <option value="Hirundinidae">Hirundinidae</option>
              <option value="Laniidae">Laniidae</option>
              <option value="Locustellidae">Locustellidae</option>
              <option value="Meropidae">Meropidae</option>
              <option value="Motacillidae">Motacillidae</option>
              <option value="Muscicapidae">Muscicapidae</option>
              <option value="Oriolidae">Oriolidae</option>
              <option value="Panuridae">Panuridae</option>
              <option value="Paridae">Paridae</option>
              <option value="Phasianidae">Phasianidae</option>
              <option value="Phylloscopidae">Phylloscopidae</option>
              <option value="Picidae">Picidae</option>
              <option value="Podicipedidae">Podicipedidae</option>
              <option value="Prunellidae">Prunellidae</option>
              <option value="Regulidae">Regulidae</option>
              <option value="Remizidae">Remizidae</option>
              <option value="Scolopacidae">Scolopacidae</option>
              <option value="Sittidae">Sittidae</option>
              <option value="Sturnidae">Sturnidae</option>
              <option value="Sylviidae">Sylviidae</option>
              <option value="Troglodytidae">Troglodytidae</option>
              <option value="Turdidae">Turdidae</option>
              <option value="Upupidae">Upupidae</option>
            </select>
            <select
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Order
              </option>
              <option value="ACCIPITRIFORMES">ACCIPITRIFORMES</option>
              <option value="ANSERIFORMES">ANSERIFORMES</option>
              <option value="APODIFORMES">APODIFORMES</option>
              <option value="BUCEROTIFORMES">BUCEROTIFORMES</option>
              <option value="CAPRIMULGIFORMES">CAPRIMULGIFORMES</option>
              <option value="CHARADRIIFORMES">CHARADRIIFORMES</option>
              <option value="CICONIIFORMES">CICONIIFORMES</option>
              <option value="COLIIFORMES">COLIIFORMES</option>
              <option value="CORACIIFORMES">CORACIIFORMES</option>
              <option value="CUCULIFORMES">CUCULIFORMES</option>
              <option value="EURYPYGIFORMES">EURYPYGIFORMES</option>
              <option value="FALCONIFORMES">FALCONIFORMES</option>
              <option value="GALLIFORMES">GALLIFORMES</option>
              <option value="GRUIFORMES">GRUIFORMES</option>
              <option value="LEPTOSOMIFORMES">LEPTOSOMIFORMES</option>
              <option value="MESITORNITHIFORMES">MESITORNITHIFORMES</option>
              <option value="MUSOPHAGIFORMES">MUSOPHAGIFORMES</option>
              <option value="OPHIOTHOMIFORMES">OPHIOTHOMIFORMES</option>
              <option value="OPITHOCOMIFORMES">OPITHOCOMIFORMES</option>
              <option value="PASSERIFORMES">PASSERIFORMES</option>
              <option value="PELECANIFORMES">PELECANIFORMES</option>
              <option value="PHAEOTHONTIFORMES">PHAEOTHONTIFORMES</option>
              <option value="PHOENICOPTERIFORMES">PHOENICOPTERIFORMES</option>
              <option value="PICIFORMES">PICIFORMES</option>
              <option value="PROCELLARIIFORMES">PROCELLARIIFORMES</option>
              <option value="PTEROCULIFORMES">PTEROCULIFORMES</option>
              <option value="PTEROCULIFORMES">PTEROCULIFORMES</option>
              <option value="RHEIFORMES">RHEIFORMES</option>
              <option value="SULIFORMES">SULIFORMES</option>
              <option value="STRUTHIONIFORMES">STRUTHIONIFORMES</option>
              <option value="STRIGIFORMES">STRIGIFORMES</option>
              <option value="TINAMIFORMES">TINAMIFORMES</option>
              <option value="TROGONIFORMES">TROGONIFORMES</option>
            </select>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              {/* Replace with actual options */}
              <option value="Common">Common</option>
              <option value="Vulnerable">Vulnerable</option>
              <option value="Declining">Declining</option>
            </select>
          </div>
          <button type="submit" className={styles.searchButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
BirdForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  addBird: PropTypes.func.isRequired,
};
export default BirdForm;
