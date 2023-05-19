import React, { useState } from "react";
import styles from "./form.module.css";
import { radioBtnsObj, checkBoxBtns } from "./utilObjects";
const Form = () => {
	const [selectedMakeText, setSelectedMakeText] = useState("");
	const [model, setModel] = useState("");
	const [selectedDate, setSelectedDate] = useState("");
	const [mileage, setMileage] = useState("");
	const [radioValue, setRadioValue] = useState("");
	const [checkboxValues, setCheckboxValues] = useState([]);
	const [selectedOption, setSelectedOption] = useState("");
	const [sliderValue, setSliderValue] = useState(0);
	const [contact, setContact] = useState("");
	const [formData, setFormData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			make: selectedMakeText,
			model: model,
			date: selectedDate,
			mileage: mileage,
			radioValue: radioValue,
			checkboxValue: checkboxValues,
			selectedOption: selectedOption,
			Price: sliderValue,
		};
		setFormData(data);
		console.log(formData);
	};

    //function to capture checkbox form data

	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;
		if (checked) {
			setCheckboxValues([...checkboxValues, value]);
		} else {
			setCheckboxValues(checkboxValues.filter((val) => val !== value));
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<label htmlFor="make">Make</label>
				<input
					type="text"
					id="make"
					placeholder="Enter your make"
					onChange={(e) => setSelectedMakeText(e.target.value)}
				/>

				<label htmlFor="model">Model</label>
				<input
					type="text"
					id="model"
					placeholder="Enter your car model"
					onChange={(e) => setModel(e.target.value)}
				/>
				<div className={styles.flexibleInputFields}>
					<div>
						<label htmlFor="year">Enter date</label>
						<input
							type="date"
							id="year"
							onChange={(e) => setSelectedDate(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="mileage">Mileage</label>
						<input
							type="number"
							id="mileage"
							min={0}
							placeholder="Enter your car's mileage"
							onChange={(e) => setMileage(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.flexibleInputFields}>
					<div className={styles.marginedDiv}>
						<p>Select condition</p>
						<div className={styles.radioBtns}>
							{radioBtnsObj.map((radioBtn) => (
								<span>
									<label htmlFor={radioBtn.title}>{radioBtn.title}</label>
									<input
										type="radio"
										name="condition"
										value={radioBtn.title}
										onChange={(e) => setRadioValue(e.target.value)}
									/>
								</span>
							))}
						</div>
					</div>
					<div className={styles.marginedDiv}>
						<p>Features</p>
						<div className={styles.checkBoxBtns}>
							{checkBoxBtns.map((checkBoxBtn) => (
								<span>
									<label>{checkBoxBtn.title}</label>
									<input
										type="checkbox"
										checked={checkboxValues.includes(checkBoxBtn.title)}
										value={checkBoxBtn.title}
										onChange={handleCheckboxChange}
									/>
								</span>
							))}
						</div>
					</div>
				</div>
				<label htmlFor="transmission">Transmission</label>
				<select
					id="transmission"
					className={styles.selectionBox}
					value={selectedOption}
					onChange={(e) => setSelectedOption(e.target.value)}>
					<option value={""}>--Select an option--</option>
					<option value={"Automatoc"}>Automatic</option>
					<option value={"Manual"}>Manual</option>
				</select>
				<label htmlFor="price">
					Price :{" "}
					<span style={{ color: "teal", fontWeight: "bold" }}>
						{sliderValue}.00$
					</span>
				</label>
				<input
					type="range"
					min="0"
					max="100"
					value={sliderValue}
					onChange={(e) => setSliderValue(e.target.value)}></input>

				<label htmlFor="contact">Contact</label>
				<input
					type="text"
					id="contact"
					placeholder="Enter your contact"
					onChange={(e) => setContact(e.target.value)}
				/>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
