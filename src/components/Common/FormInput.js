import React from 'react';

const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
}) => {
	return (
		<div className="font-general-regular mb-4">
			<label
				className="block text-lg text-primary-dark dark:text-primary-light mb-1"
				htmlFor={labelFor}
			>
				{inputLabel}
			</label>
			<input
				className="w-full px-5 py-2 bg-white dark:bg-[#0a0a0a] text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-md focus:outline-none focus:ring-2 focus:ring-amber-400"
				type={inputType}
				id={inputId}
				name={inputName}
				placeholder={placeholderText}
				aria-label={ariaLabelName}
				required
			/>
		</div>
	);
};

export default FormInput;
