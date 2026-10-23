// Keys that content may reference. The drawings live in components/, in an
// exhaustive Record keyed by these types, so the compiler fails if a key has no
// drawing and Zod fails the build if content names a key that does not exist.

// Decorative artwork shown in place of a photo.
export const MOTIF_KEYS = ['PipelineFlow', 'RecoveryLoop', 'HomelabRack', 'HomelabTopology'] as const;

// Informative diagrams inside a case study.
export const CASE_VISUAL_KEYS = ['td-architecture', 'td-before-after'] as const;

export type MotifKey = (typeof MOTIF_KEYS)[number];
export type CaseVisualKey = (typeof CASE_VISUAL_KEYS)[number];
