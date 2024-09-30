const calculateSingle = (outcomes, totalStake) => {
    return {
        totalOdds: outcomes[0].odds,
        potentialPayout: (outcomes[0].odds * totalStake).toFixed(2)
    }
};

const calculateParlay = (outcomes, totalStake) => {
    const totalOdds = outcomes.reduce((totalOdds, outcome) => totalOdds * outcome.odds, 1);

    return {
        totalOdds: totalOdds.toFixed(2),
        potentialPayout: (totalOdds * totalStake).toFixed(2)
    }
};

const calculateSystem = (outcomes, totalStake, combinationCount) => {
    let totalOdds = 0;
    let countStake = 0

    for (const count of combinationCount) {
        const combinations = getCombinations(outcomes, count);
        const combinationOdds = Object.keys(combinations);

        totalOdds += combinationOdds.reduce((odds, comb) => odds += +comb, 0);
        countStake += combinationOdds.length;
    }

    return {
        totalOdds: totalOdds.toFixed(2),
        potentialPayout: (countStake * totalStake).toFixed(2)
    }
};


const getCombinations = (arr, k) => {
    const result = {};

    const combination = (start, chosen) => {
        if (chosen.length === k) {
            const totalOdds = chosen.reduce((acc, outcome) => acc * outcome.odds, 1);
            result[totalOdds] = chosen;

            return;
        }
        for (let i = start; i < arr.length; i++) {
            combination(i + 1, [...chosen, arr[i]]);
        }
    };
    combination(0, []);

    return result;
}


export const payoutCalculations = (outcomes, selectedTab, totalStake, combinationCount) => {
    switch (selectedTab) {
        case 'single':
            return calculateSingle(outcomes, totalStake);
        case 'parlay':
            return calculateParlay(outcomes, totalStake);
        case 'system':
            return calculateSystem(outcomes, totalStake, combinationCount);
    }
};

export const combinationCount = (n, k) => {
    const factorial = (num) => num <= 1 ? 1 : num * factorial(num - 1);

    return factorial(n) / (factorial(k) * factorial(n - k));
}

export const generateCountCombination = (length) => {
    return length <= 7 ?
        Array.from({length}, (_, i) => i + 1) :
        [1, 2, length - 2, length - 1, length];
}