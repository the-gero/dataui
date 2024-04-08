import { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'

function PredictForm() {


    const [pregnancies, setPregnancies] = useState(0);
    const [glucose, setGlucose] = useState(0);
    const [bloodPressure, setBloodPressure] = useState(0);
    const [skinThickness, setSkinThickness] = useState(0);
    const [insulin, setInsulin] = useState(0);
    const [bmi, setBMI] = useState(0);
    const [age, setAge] = useState(0);

    const [familyHistory, setFamilyHistory] = useState({
        parents: 0,
        siblings: 0,
        grandparents: 0,
        auntsUncles: 0,
        niecesNephews: 0
    });
    const [dpfScore, setDPFScore] = useState(0);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFamilyHistory({ ...familyHistory, [name]: parseInt(value) });
    };

    const calculateDPF = () => {
        const weights = {
            parents: 2,
            siblings: 1,
            grandparents: 1,
            auntsUncles: 0.5,
            niecesNephews: 0.5
        };

        let totalScore = 0;
        for (const relationship in familyHistory) {
            totalScore += familyHistory[relationship] * weights[relationship];
        }
        setDPFScore(totalScore);
    };
    useEffect(() => {
        calculateDPF()
    }, [familyHistory]
    )
    return (
        <DefaultLayout>
            <h1 className='text-2xl font-bold text-center'>
                Heart Attack Prediction
            </h1>
            <form className='grid grid-cols-2 gap-2' method='POST' onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target)
                fetch("http://127.0.0.1:5000/predict", {
                    method: "POST",
                    body: formData
                }).then(res => res.json()).then(e => {
                    const result = document.querySelector("#result")
                    result?.childNodes?.forEach(e => e.remove())
                    const b = document.createElement("b")
                    b.append(`Prediction is: ${e.prediction}`)
                    result?.appendChild(b)
                })
                return false
            }}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" name="age" placeholder="Your age.." />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="sex">Sex</label>
                    <select id="sex" name="sex">
                        <option selected>----select option----</option>
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="cp">Chest Pain Type</label>
                    <select id="cp" name="cp">
                        <option selected>----select option----</option>
                        <option value={0}>Typical Angina</option>
                        <option value={1}>Atypical Angina</option>
                        <option value={2}>Non-anginal Pain</option>
                        <option value={3}>Asymtomatic</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="trestbps">Resting Blood Pressure</label>
                    <input
                        type="number"
                        id="trestbps"
                        name="trestbps"
                        placeholder="A number in range [94-200] mmHg"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="chol">Serum Cholesterol</label>
                    <input
                        type="number"
                        id="chol"
                        name="chol"
                        placeholder="A number in range [126-564] mg/dl"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="fbs">Fasting Blood Sugar</label>
                    <select id="fbs" name="fbs">
                        <option selected>----select option----</option>
                        <option value={1}>Greater than 120 mg/dl</option>
                        <option value={0}>Less than 120 mg/dl</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="restecg">Resting ECG Results</label>
                    <select id="restecg" name="restecg">
                        <option selected>----select option----</option>
                        <option value={0}>Normal</option>
                        <option value={1}>Having ST-T wave abnormality</option>
                        <option value={2}>Probable or definite left ventricular hypertrophy</option>
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="thalach">Max Heart Rate </label>
                    <input
                        type="number"
                        id="thalach"
                        name="thalach"
                        placeholder="A number in range [71-202] bpm"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="exang">Exercise-induced Angina</label>
                    <select id="exang" name="exang">
                        <option selected>----select option----</option>
                        <option value={1}>Yes</option>
                        <option value={0}>No</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="oldpeak">ST depression</label>
                    <input
                        type="number"
                        id="oldpeak"
                        name="oldpeak"
                        placeholder="ST depression, typically in [0-6.2]"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="slope">slope of the peak exercise ST segment</label>
                    <select id="slope" name="slope">
                        <option selected>----select option----</option>
                        <option value={0}>Upsloping</option>
                        <option value={1}>Flat</option>
                        <option value={2}>Downsloping</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="ca">Number of Major vessels</label>
                    <input type="number" id="ca" name="ca" placeholder="Typically in [0-4]" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="thal">Thalassemia</label>
                    <select id="thal" name="thal">
                        <option selected>----select option----</option>
                        <option value={0}>Normal</option>
                        <option value={1}>Fixed Defect</option>
                        <option value={2}>Reversible Defect</option>
                    </select>
                </div>

                {/* <input type="submit" className="my-cta-button" defaultValue="Predict" /> */}



                <div className='flex justify-center my-2 items-end col-span-full'>
                    <button>Predict</button>
                </div>
            </form>
            <h5 id='result' className="text-title-md font-bold text-black dark:text-white">{ }</h5>
        </DefaultLayout>
    )
}

export default PredictForm
