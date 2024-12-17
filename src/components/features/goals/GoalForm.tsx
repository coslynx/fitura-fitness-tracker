const handleSubmit = useCallback(async () => {
    try {
      const validationErrors = Object.entries(goalData).reduce((acc, [key, value]) => {
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
      await goalsService.createGoal(goalData);
      onClose();
      addGoal(goalData);
    } catch (error) {
      // Log the error using helpers.logError
      console.error("Error submitting goal:", error);
      // Optionally display an error message to the user using Modal
    }
  }, [goalData, onClose, addGoal]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="goal-form">
        <TextField
          label="Goal Type"
          type="text"
          value={goalData.type}
          onChange={e => setGoalData({ ...goalData, type: e.target.value })}
          error={Boolean(errors.type)}
          helperText={errors.type}
        />
        <TextField
          label="Target Value"
          type="number"
          value={goalData.target}
          onChange={e => setGoalData({ ...goalData, target: parseInt(e.target.value, 10) })}
          error={Boolean(errors.target)}
          helperText={errors.target}
        />
        <TextField
          label="Deadline"
          type="date"
          value={goalData.deadline}
          onChange={e => setGoalData({ ...goalData, deadline: e.target.value })}
          error={Boolean(errors.deadline)}
          helperText={errors.deadline}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default GoalForm;