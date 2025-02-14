export default function Logo({ overrideSize }: { overrideSize?: boolean }) {
  return overrideSize ? (
    <>
      <div>
        Chronical<span className="text-emerald-600">Frames</span>
      </div>
    </>
  ) : (
    <>
      <div className="hidden sm:block">
        Chronical<span className="text-emerald-600">Frames</span>
      </div>
      <div className="sm:invisible">
        C<span className="text-emerald-600">F</span>
      </div>
    </>
  );
}
