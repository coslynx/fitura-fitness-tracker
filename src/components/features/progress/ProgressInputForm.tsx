const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validationErrors = Object.entries(progressData).reduce((acc, [key, value]) => {
        const error = validators[key]?.(value);
        if (error) {
          acc[key] = error;
        }
        return acc;
      }, {} as { [key: string]: string });

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      await goalsService.updateGoalProgress(progressData);
      onSubmit(progressData);
      updateGoalProgress(progressData);
    } catch (error) {
      console.error('Error submitting progress:', error);
      //Consider displaying an error message to the user using Modal component
    }
  }, [progressData, onSubmit, updateGoalProgress]);

  return (
    <form onSubmit={handleSubmit} className="progress-form">
      <Input
        label="Value"
        type="number"
        onChange={e =>
          setProgressData({ ...progressData, value: parseInt(e.target.value, 10) })
        }
        validators={{ value: validators.isPositiveNumber }}
        error={Boolean(errors.value)}
        helperText={errors.value}
      />
      <Input
        label="Date"
        type="date"
        onChange={e => setProgressData({ ...progressData, date: e.target.value })}
        validators={{ date: validators.isValidDate }}
        error={Boolean(errors.date)}
        helperText={errors.date}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default ProgressInputForm;