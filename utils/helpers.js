const risk_extractor = (bmi, risks) => {
  if (bmi < 18.5) {
    return risks.find((o) => o.type == risk_enum.malnutrition);
  } else if (18.5 <= bmi && bmi < 25) {
    return risks.find((o) => o.type == risk_enum.low);
  } else if (25 <= bmi && bmi < 30) {
    return risks.find((o) => o.type == risk_enum.enhances);
  } else if (30 <= bmi && bmi < 35) {
    return risks.find((o) => o.type == risk_enum.medium);
  } else if (35 <= bmi && bmi < 40) {
    return risks.find((o) => o.type == risk_enum.high);
  } else if (40 <= bmi) {
    return risks.find((o) => o.type == risk_enum.veryHigh);
  }
};

const bmi_category_extractor = (bmi, cats) => {
  if (bmi < 18.5) {
    return cats.find((o) => o.type == bmi_category_enum.underweight);
  } else if (18.5 <= bmi && bmi < 25) {
    return cats.find((o) => o.type == bmi_category_enum.normal);
  } else if (25 <= bmi && bmi < 30) {
    return cats.find((o) => o.type == bmi_category_enum.overweight);
  } else if (30 <= bmi && bmi < 35) {
    return cats.find((o) => o.type == bmi_category_enum.moderate);
  } else if (35 <= bmi && bmi < 40) {
    return cats.find((o) => o.type == bmi_category_enum.severel);
  } else if (40 <= bmi) {
    return cats.find((o) => o.type == bmi_category_enum.verySeverel);
  }
};

const risk_enum = Object.freeze({
  malnutrition: "Malnutrition risk",
  low: "Low risk",
  enhances: "Enhanced risk",
  medium: "Medium risk",
  high: "High",
  veryHigh: "Very high risk",
});

const bmi_category_enum = Object.freeze({
  underweight: "Underweight",
  normal: "Normal weight",
  overweight: "Overweight",
  moderate: "Moderately obese",
  severel: "Severel obese",
  verySeverel: "Very severely obese",
});

module.exports = {
  risk_extractor,
  bmi_category_extractor,
  risk_enum,
  bmi_category_enum,
};
