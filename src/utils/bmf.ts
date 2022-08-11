interface Props {
  stats: {
    weight: string;
    neck: string;
    waist: string;
    weightP: string;
    neckFt: string;
    neckIn: string;
    waistFt: string;
    waistIn: string;
    height: string;
    hip: string;
    hipFt: string;
    hipIn: string;
  };
  gender: 'male' | 'female';
  age: string;
}

export const getAge = (birthDate: string) => {
  console.log(
    'result',
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10),
  );

  // @ts-ignore
  return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
};

export const getIdealBodyFat = (age: number, gender: 'male' | 'female') => {
  switch (true) {
    case age <= 20:
      return gender === 'male' ? 8.5 : 17.5;
    case age <= 25:
      return gender === 'male' ? 10.5 : 18.4;
    case age <= 30:
      return gender === 'male' ? 12.7 : 19.3;
    case age <= 35:
      return gender === 'male' ? 13.7 : 21.5;
    case age <= 40:
      return gender === 'male' ? 15.3 : 22.2;
    case age <= 45:
      return gender === 'male' ? 16.4 : 22.9;
    case age <= 50:
      return gender === 'male' ? 18.9 : 25.2;
    case age <= 55:
      return gender === 'male' ? 20.9 : 26.3;
    default:
      return gender === 'male' ? 20.9 : 26.3;
  }
};

export const getCategory = (fat: number, gender: 'male' | 'female') => {
  let fatPercentage = Math.round(fat / 100);
  console.log('from female', { fat, fatPercentage });
  let cat = '';
  if (gender === 'male') {
    if (fatPercentage >= 2 && fatPercentage <= 5) {
      cat = 'Essential fat';
    }
    if (fatPercentage >= 6 && fatPercentage <= 13) {
      cat = 'Athletes';
    }
    if (fatPercentage >= 14 && fatPercentage <= 17) {
      cat = 'Fitness';
    }
    if (fatPercentage >= 18 && fatPercentage <= 24) {
      cat = 'Average';
    }
    if (fatPercentage >= 25) {
      cat = 'Obese';
    }
    return cat;
  }

  if (gender === 'female') {
    if (fatPercentage <= 10 && fatPercentage <= 13) {
      cat = 'Essential';
    }
    if (fatPercentage >= 14 && fatPercentage <= 20) {
      cat = 'Athletes';
    }
    if (fatPercentage >= 21 && fatPercentage <= 24) {
      cat = 'Fitness';
    }
    if (fatPercentage >= 25 && fatPercentage <= 31) {
      cat = 'Average';
    }
    if (fatPercentage >= 32) {
      cat = 'Obese';
    }
    console.log({ cat });

    return cat;
  }
};
export const getLeanBodyMass = (stats: any, gender: 'male' | 'female') => {
  if (gender === 'male') {
    return 0.3281 * stats?.weight + 0.33929 * stats?.height - 29.5336;
  }

  return 0.29569 * stats?.weight + 0.41813 * stats?.height - 43.2933;
};
export const BODY_FAT = async ({ stats, gender, age }: Props) => {
  const bodyFatMale =
    (495 / (1.0324 - 0.19077)) *
      Math.log(Number(stats.waist) - Number(stats.neck)) +
    0.15456 * Math.log(Number(stats.height)) -
    450;

  const bodyFatFemale =
    (495 / (1.2579 - 0.35004)) *
      Math.log(Number(stats.waist) + Number(stats.hip) - Number(stats.neck)) +
    0.221 * Math.log(Number(stats.height)) -
    450;

  const actualAge = getAge(age);

  console.log({ bodyFatMale, stats });

  const userStats = {
    fat: gender === 'male' ? bodyFatMale : bodyFatFemale,
    category: getCategory(
      gender === 'male' ? Number(bodyFatMale) : Number(bodyFatFemale),
      gender,
    ),
    idealBodyFatByAge: getIdealBodyFat(actualAge, gender),
    mass: Number(stats.weight) / Math.pow(Number(stats.height), 2),
    leanBodyMass: getLeanBodyMass(stats, gender),
    toLose: getToLose(
      gender === 'male' ? bodyFatMale : bodyFatFemale,
      getIdealBodyFat(actualAge, gender),
    ),
  };

  return userStats;
};

export const getToLose = (mass: number, ideal: any) => {
  let dFatPercentage = Number(mass) / 100;

  return (dFatPercentage - ideal) * 100;
};
