const SkillCircle = ({ label, percent, color, bg }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(${color} ${percent * 3.6}deg, #1f2937 0deg)`,
        }}
      >
        {/* inner circle */}
        <div
          className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold"
          style={{ background: bg, color: color }}
        >
          {label}
        </div>
      </div>

      <span className="text-xs text-gray-400">{percent}%</span>
    </div>
  );
};

export default SkillCircle;
