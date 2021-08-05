import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { addColor, fetchColors, removeColor } from '../apis';
import ColorList from '../components/ColorList';
import Button from '../components/Button';
import Input from '../components/Input';
import LoadingSpinner from '../components/LoadingSpinner';
import Dialog from '../components/Dialog';

const initInputValue = { id: '', name: '', code: '#' };
const FIELD_NAMES = {
  NAME: 'name',
  CODE: 'code'
};

function App() {
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setDialog] = useState(false);
  const [colors, setColors] = useState([]);
  const [inputValue, setInputValue] = useState(initInputValue);
  const [selectedColor, setSelectedColor] = useState(null);
  const [hasError, setError] = useState({});
  const [errors, setErrors] = useState(null);

  const initFetchColors = useCallback(async () => {
    setLoading(true);

    await fetchColors().then(response => {
      setColors([...response]);
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    initFetchColors();
  }, [initFetchColors]);

  const onInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case FIELD_NAMES.CODE: {
        setError({ [name]: !/^#[0-9A-F]{6}$/i.test(value) });
        break;
      }
      case FIELD_NAMES.NAME: {
        setError({ [name]: value.length > 0 });
        break;
      }
      default:
        break;
    }

    setInputValue({ ...inputValue, id: inputValue.code, [name]: value });
  };

  const handleAddColor = async evt => {
    evt.preventDefault();

    if (hasError && (!hasError.name || !hasError.code)) {
      try {
        setLoading(true);
        await addColor(inputValue).then(res => {
          colors.push(res);
        });
      } catch (error) {
        setErrors(error);
      } finally {
        setLoading(false);
      }

      setLoading(false);
      setInputValue(initInputValue);
    }
  };

  const handleRemoveColor = async () => {
    try {
      setLoading(true);
      const res = await removeColor(selectedColor);
      const newColors = colors.filter(i => i.id !== res);
      setColors(newColors);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
      setDialog(false);
    }
  };

  const openDialog = colorId => {
    setDialog(true);
    setSelectedColor(colorId);
  };

  const closeDialog = () => setDialog(false);

  return (
    <div className="App">
      <div className="container">
        <h1>Colors</h1>
        {colors.length ? (
          <ColorList
            list={colors}
            tableActionButtonText="Remove"
            handleTableRowAction={openDialog}
          />
        ) : null}
        <div className="actions-wrapper">
          <form onSubmit={handleAddColor} className="form-container">
            <Input
              name={FIELD_NAMES.NAME}
              placeholder="Color name"
              onInputChange={onInputChange}
              hasError={hasError[FIELD_NAMES.NAME]}
              value={inputValue.name}
              isRequired
            />
            <Input
              name={FIELD_NAMES.CODE}
              isRequired
              placeholder="Color code"
              onInputChange={onInputChange}
              value={inputValue.code}
              hasError={hasError[FIELD_NAMES.CODE]}
              errorMessage="Not hex code"
            />
            <Button buttonText="Add" buttonType="submit" disabled={loading} />
          </form>
        </div>
        <LoadingSpinner isLoading={loading} />
        <Dialog
          open={isDialogOpen}
          dialogTitle="Remove color"
          message="Are you sure you want to delete color ?"
          cancelAction={closeDialog}
          okAction={handleRemoveColor}
        />
      </div>
    </div>
  );
}

export default App;
