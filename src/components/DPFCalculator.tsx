import React, { useState } from 'react';

function DPFCalculator() {
    const [siblings, setSiblings] = useState(0);
    const [parents, setParents] = useState(0);
    const [children, setChildren] = useState(0);
    const [dpf, setDpf] = useState(0);

    const calculateDPF = () => {
        const siblingCoefficient = 0.1;
        const parentCoefficient = 0.05;
        const childrenCoefficient = 0.2;

        const siblingContribution = siblings * siblingCoefficient;
        const parentContribution = parents * parentCoefficient;
        const childrenContribution = children * childrenCoefficient;

        const totalDPF = siblingContribution + parentContribution + childrenContribution;
        setDpf(totalDPF);
    };

    return (
        <>
            <h2>Diabetes Pedigree Function (DPF) Calculator</h2>
            <div>
                <label htmlFor="siblings">Number of Siblings:</label>
                <input
                    type="number"
                    id="siblings"
                    value={siblings}
                    onChange={(e) => setSiblings(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="parents">Number of Parents:</label>
                <input
                    type="number"
                    id="parents"
                    value={parents}
                    onChange={(e) => setParents(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="children">Number of Children:</label>
                <input
                    type="number"
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                />
            </div>
            <button onClick={calculateDPF}>Calculate DPF</button>
            <div>
                {dpf !== 0 && (
                    <p>
                        DPF = {dpf}
                    </p>
                )}
            </div>
        </>
    );
}

export default DPFCalculator;
