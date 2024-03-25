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

                <div>
                    <label htmlFor="pregnancies">Pregnancies:</label>
                    <input required type="number"
                        min={0} name="pregnancies" value={pregnancies} onChange={(e) => setPregnancies(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="glucose">Glucose:</label>
                    <input required type="number"
                        min={0} name="glucose" value={glucose} onChange={(e) => setGlucose(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="bloodpressure">Blood Pressure:</label>
                    <input required type="number"
                        min={0} name="bloodpressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="skinthickness">Skin Thickness:</label>
                    <input required type="number"
                        min={0} name="skinthickness" value={skinThickness} onChange={(e) => setSkinThickness(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="insulin">Insulin:</label>
                    <input required type="number"
                        min={0} name="insulin" value={insulin} onChange={(e) => setInsulin(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="bmi">BMI:</label>
                    <input required type="number"
                        min={0} name="bmi" value={bmi} onChange={(e) => setBMI(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input required type="number"
                        min={0} name="age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>


                <label>
                    Parents:
                    <input required
                        type="number"
                        min={0}
                        name="parents"
                        value={familyHistory.parents}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Siblings:
                    <input required
                        type="number"
                        min={0}
                        name="siblings"
                        value={familyHistory.siblings}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Grandparents:
                    <input required
                        type="number"
                        min={0}
                        name="grandparents"
                        value={familyHistory.grandparents}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Aunts/Uncles:
                    <input required
                        type="number"
                        min={0}
                        name="auntsUncles"
                        value={familyHistory.auntsUncles}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    Nieces/Nephews:
                    <input required
                        type="number"
                        min={0}
                        name="niecesNephews"
                        value={familyHistory.niecesNephews}
                        onChange={handleInputChange}
                    />
                </label>


                <div>
                    <label htmlFor="diabetespedigreefunction">Diabetes Pedigree Function:</label>
                    <input type="number"
                        min={0} name="diabetespedigreefunction" value={dpfScore} readOnly /* onChange={(e) => setDPFScore(e.target.value)} */ />
                </div>
                <br />
                <div className='flex justify-center my-2 items-end col-span-full'>
                    <button>Predict</button>
                </div>
            </form>
            <h5 id='result' className="text-title-md font-bold text-black dark:text-white">{ }</h5>
        </DefaultLayout>
    )
}

export default PredictForm
