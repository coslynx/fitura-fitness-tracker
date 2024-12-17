const handleAddGoal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button onClick={handleAddGoal} variant="contained">
        Add Goal
      </Button>
      <GoalForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {loading && <LoadingIndicator />}
      {error && <ErrorBoundary FallbackComponent={<div>Error fetching goals</div>} />}
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default GoalList;