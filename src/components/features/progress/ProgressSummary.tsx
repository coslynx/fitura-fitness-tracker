const progress = goals.reduce((acc, goal) => acc + goal.progress, 0);
  const totalGoals = goals.length;

  return (
    <Box>
      <Typography variant="h6">Progress Summary</Typography>
      {totalGoals > 0 ? (
        <>
          <Typography>Overall Progress: {Math.round((progress / totalGoals) * 100)}%</Typography>
          <LinearProgress variant="determinate" value={Math.round((progress / totalGoals) * 100)} />
        </>
      ) : (
        <Typography>No goals set yet.</Typography>
      )}
      <ProgressInputForm goalId={""} onSubmit={() => {}} />
    </Box>
  );
};

export default ProgressSummary;