import { useMemo, useState } from 'react';
import {
  Calendar,
  Users,
  Utensils,
  Salad,
  CheckCircle2,
  Circle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import {
  menuCategories,
  eventTypes,
  serviceStyles,
  guestTiers,
  budgetRanges,
} from '@/data/menu';
import { supabase, type CateringInquiry } from '@/lib/supabase';

type Props = { open: boolean; onClose: () => void };

const steps = ['Event', 'Service', 'Menu', 'Details'] as const;

const guestTierCounts: Record<string, number> = {
  intimate: 20,
  small: 45,
  medium: 90,
  large: 180,
  grand: 300,
};

export default function EventPlanner({ open, onClose }: Props) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form state
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [guestTier, setGuestTier] = useState('');
  const [serviceStyle, setServiceStyle] = useState('');
  const [selectedMenu, setSelectedMenu] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [dietary, setDietary] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const guestCount = guestTier ? guestTierCounts[guestTier] : 0;

  const estimate = useMemo(() => {
    if (selectedMenu.length === 0 || guestCount === 0) return 0;
    const perGuest = selectedMenu.reduce((sum, id) => {
      const item = menuCategories
        .flatMap((c) => c.items)
        .find((i) => i.id === id);
      return sum + (item?.price ?? 0);
    }, 0);
    return perGuest * guestCount;
  }, [selectedMenu, guestCount]);

  const toggleMenu = (id: string) =>
    setSelectedMenu((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );

  const canAdvance = () => {
    if (step === 0) return eventType && eventDate && guestTier;
    if (step === 1) return serviceStyle;
    if (step === 2) return selectedMenu.length > 0;
    return true;
  };

  const reset = () => {
    setStep(0);
    setSubmitted(false);
    setError(null);
    setEventType('');
    setEventDate('');
    setGuestTier('');
    setServiceStyle('');
    setSelectedMenu([]);
    setBudget('');
    setDietary('');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleClose = () => {
    onClose();
    if (submitted) reset();
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    const payload: CateringInquiry = {
      name,
      email,
      phone,
      event_type: eventType,
      event_date: eventDate,
      guests: guestCount,
      service_style: serviceStyle,
      menu_items: selectedMenu,
      dietary_notes: dietary,
      budget,
      message,
    };
    try {
      const { error: insertError } = await supabase
        .from('catering_inquiries')
        .insert(payload);
      if (insertError) throw insertError;
      setSubmitted(true);
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in bg-ink/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="relative z-10 flex max-h-[94vh] w-full max-w-4xl animate-scale-in flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 bg-cream-deep px-6 py-4">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest2 text-saffron-600">
              <Sparkles className="h-3.5 w-3.5" /> Build Your Event
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
              {submitted ? 'Request received' : 'Plan your celebration'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-ink-light transition-colors hover:bg-cream-dark hover:text-ink"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100">
              <CheckCircle2 className="h-9 w-9 text-sage-600" strokeWidth={1.5} />
            </div>
            <h4 className="mt-6 font-display text-3xl font-semibold text-ink">
              Thank you, {name.split(' ')[0] || 'friend'}.
            </h4>
            <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
              We received your request and our events team will reach out within one
              business day to begin shaping your menu and quote.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={reset}
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-cream-dark"
              >
                Plan another event
              </button>
              <button
                onClick={handleClose}
                className="rounded-full bg-saffron-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-saffron-700"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col overflow-hidden">
            {/* Stepper */}
            <div className="flex items-center gap-2 border-b border-ink/10 px-6 py-3">
              {steps.map((label, i) => (
                <div key={label} className="flex flex-1 items-center gap-2">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                      i <= step
                        ? 'bg-saffron-600 text-white'
                        : 'bg-cream-dark text-ink-light'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span
                    className={`hidden text-sm sm:inline ${
                      i <= step ? 'font-medium text-ink' : 'text-ink-light'
                    }`}
                  >
                    {label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="mx-1 h-px flex-1 bg-ink/10" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-1 flex-col overflow-hidden">
              {/* Step content (scrollable) */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {/* STEP 0 — Event basics */}
                {step === 0 && (
                  <div className="animate-fade-in space-y-7">
                    <Field label="What are you celebrating?">
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {eventTypes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setEventType(t.id)}
                            className={`rounded-xl border p-3 text-left transition-all ${
                              eventType === t.id
                                ? 'border-saffron-600 bg-saffron-50 ring-1 ring-saffron-600'
                                : 'border-ink/15 hover:border-saffron-400'
                            }`}
                          >
                            <p className="font-display text-lg font-semibold text-ink">
                              {t.name}
                            </p>
                            <p className="mt-0.5 text-xs text-ink-light">{t.note}</p>
                          </button>
                        ))}
                      </div>
                    </Field>

                    <Field label="Preferred date" icon={Calendar}>
                      <input
                        type="date"
                        value={eventDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                      />
                    </Field>

                    <Field label="How many guests?" icon={Users}>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                        {guestTiers.map((g) => (
                          <button
                            key={g.id}
                            onClick={() => setGuestTier(g.id)}
                            className={`rounded-xl border p-3 text-center transition-all ${
                              guestTier === g.id
                                ? 'border-saffron-600 bg-saffron-50 ring-1 ring-saffron-600'
                                : 'border-ink/15 hover:border-saffron-400'
                            }`}
                          >
                            <p className="font-display text-base font-semibold text-ink">
                              {g.label}
                            </p>
                            <p className="mt-0.5 text-xs text-ink-light">{g.range}</p>
                          </button>
                        ))}
                      </div>
                    </Field>
                  </div>
                )}

                {/* STEP 1 — Service style */}
                {step === 1 && (
                  <div className="animate-fade-in space-y-4">
                    <Field label="How should the food be served?" icon={Utensils}>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {serviceStyles.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setServiceStyle(s.id)}
                            className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                              serviceStyle === s.id
                                ? 'border-saffron-600 bg-saffron-50 ring-1 ring-saffron-600'
                                : 'border-ink/15 hover:border-saffron-400'
                            }`}
                          >
                            {serviceStyle === s.id ? (
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-saffron-600" />
                            ) : (
                              <Circle className="h-5 w-5 shrink-0 text-ink/30" />
                            )}
                            <div>
                              <p className="font-display text-lg font-semibold text-ink">
                                {s.name}
                              </p>
                              <p className="mt-0.5 text-sm text-ink-light">{s.note}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </Field>
                  </div>
                )}

                {/* STEP 2 — Menu selection */}
                {step === 2 && (
                  <div className="animate-fade-in space-y-6">
                    <Field label="Choose your menu items" icon={Salad}>
                      <p className="mb-4 text-sm text-ink-light">
                        Select at least one. Your estimated total updates live.
                      </p>
                    </Field>
                    {menuCategories.map((cat) => (
                      <div key={cat.id}>
                        <h4 className="mb-3 font-display text-xl font-semibold text-ink">
                          {cat.name}
                          <span className="ml-2 text-sm font-normal italic text-saffron-700">
                            {cat.blurb}
                          </span>
                        </h4>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {cat.items.map((item) => {
                            const checked = selectedMenu.includes(item.id);
                            return (
                              <button
                                key={item.id}
                                onClick={() => toggleMenu(item.id)}
                                className={`flex items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                                  checked
                                    ? 'border-saffron-600 bg-saffron-50'
                                    : 'border-ink/15 hover:border-saffron-400'
                                }`}
                              >
                                {checked ? (
                                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-600" />
                                ) : (
                                  <Circle className="mt-0.5 h-5 w-5 shrink-0 text-ink/25" />
                                )}
                                <div className="flex-1">
                                  <div className="flex items-baseline justify-between gap-2">
                                    <p className="font-medium text-ink">{item.name}</p>
                                    <p className="font-display text-lg font-semibold text-saffron-600">
                                      ${item.price}
                                    </p>
                                  </div>
                                  <p className="mt-0.5 text-xs text-ink-light">
                                    {item.description}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 3 — Contact details */}
                {step === 3 && (
                  <div className="animate-fade-in space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full name">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                          placeholder="Alex Rivera"
                        />
                      </Field>
                      <Field label="Email">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                          placeholder="you@email.com"
                        />
                      </Field>
                    </div>
                    <Field label="Phone">
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                        placeholder="(555) 123-4567"
                      />
                    </Field>
                    <Field label="Budget per guest (optional)">
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Dietary notes & allergies">
                      <input
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                        placeholder="e.g. gluten-free, vegan options, nut allergy"
                      />
                    </Field>
                    <Field label="Anything else we should know?">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="w-full resize-none rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-saffron-600 focus:ring-1 focus:ring-saffron-600"
                        placeholder="Venue, theme, special requests…"
                      />
                    </Field>

                    {error && (
                      <p className="rounded-xl bg-terracotta-500/10 px-4 py-3 text-sm text-terracotta-600">
                        {error}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Summary bar + nav */}
              <div className="border-t border-ink/10 bg-cream-deep px-6 py-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <div className="text-ink-light">
                    {guestCount > 0 && (
                      <span>
                        <span className="font-medium text-ink">{guestCount}</span> guests
                        {' · '}
                        <span className="font-medium text-ink">
                          {selectedMenu.length}
                        </span>{' '}
                        items
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-ink-light">Estimate</span>
                    <p className="font-display text-2xl font-semibold text-saffron-700">
                      {estimate > 0
                        ? `$${estimate.toLocaleString()}`
                        : '—'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-ink-soft transition hover:text-ink disabled:opacity-0"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back
                  </button>
                  {step < steps.length - 1 ? (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canAdvance()}
                      className="inline-flex items-center gap-1.5 rounded-full bg-saffron-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-saffron-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={submitting || !name || !email || !phone}
                      className="inline-flex items-center gap-1.5 rounded-full bg-saffron-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-saffron-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {submitting ? 'Sending…' : 'Submit Request'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-ink">
        {Icon && <Icon className="h-4 w-4 text-saffron-600" />}
        {label}
      </label>
      {children}
    </div>
  );
}
