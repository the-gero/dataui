import { useEffect, useState } from 'react'
import DefaultLayout from '../layout/DefaultLayout'

function PredictForm() {
    return (
        <DefaultLayout>
            <h1 className='text-2xl font-bold text-center'>
                Heart Attack Prediction
            </h1>
            <p className='text-center'>(Note:This model is 82.67% accurate)</p>
            <hr className='my-2' />
            {/* <input type="text" onChange={(e) => {
                const values = JSON.parse(e.target.value)

                document.querySelector("#preform #age").value = values[0]
                document.querySelector("#preform #sex").value = values[1]
                document.querySelector("#preform #cp").value = values[2]
                document.querySelector("#preform #trestbps").value = values[3]
                document.querySelector("#preform #chol").value = values[4]
                document.querySelector("#preform #fbs").value = values[5]
                document.querySelector("#preform #restecg").value = values[6]
                document.querySelector("#preform #thalach").value = values[7]
                document.querySelector("#preform #exang").value = values[8]
                document.querySelector("#preform #oldpeak").value = values[9]
                document.querySelector("#preform #slope").value = values[10]
                document.querySelector("#preform #ca").value = values[11]
                document.querySelector("#preform #thal").value = values[12]
            }} /> */}
            <form className='grid grid-cols-2 gap-2' id='preform' method='POST' onChange={(e) => {
                const formData = new FormData(document.querySelector("#preform"))
                const data = [formData.get("age"), formData.get("sex"), formData.get("cp"), formData.get("trestbps"), formData.get("chol"), formData.get("fbs"), formData.get("restecg"), formData.get("thalach"), formData.get("exang"), formData.get("oldpeak"), formData.get("slope"), formData.get("ca"), formData.get("thal")]
                console.clear()
                console.log(data)
            }} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target)
                fetch("http://127.0.0.1:5000/predict", {
                    method: "POST",
                    body: formData
                }).then(res => res.json()).then(e => {
                    const result = document.querySelector("#result")
                    result?.childNodes?.forEach(e => e.remove())
                    const b = document.createElement("b")
                    b.append(`Prediction is: ${e.prediction == 1 ? "You have Chances of Heart Disease." : "You DON'T chances have Heart Disease."}`)
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
                        step={0.1}
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
