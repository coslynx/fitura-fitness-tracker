return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{goal.type}</Typography>
        <Typography>Target: {goal.target}</Typography>
        <Typography>Deadline: {goal.deadline}</Typography>
        <LinearProgress variant="determinate" value={goal.progress} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button size="small" onClick={() => onEdit && onEdit(goal.id)}>Edit</Button>
          <Button size="small" color="error" onClick={() => onDelete && onDelete(goal.id)}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalCard;