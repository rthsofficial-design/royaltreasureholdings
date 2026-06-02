import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type {
  BoardMember,
  Brand,
  ContactSubmission,
  CreateBoardMemberArgs,
  CreateBrandArgs,
  CreateJobArgs,
  FirmInfo,
  Job,
  JobApplication,
  SubmitApplicationArgs,
  SubmitContactArgs,
  UpdateBoardMemberArgs,
  UpdateBrandArgs,
  UpdateFirmInfoArgs,
  UpdateJobArgs,
} from "../types";

// ── Brands ──────────────────────────────────────────────────────────────────

export function useBrands() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listBrands();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useBrand(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Brand | null>({
    queryKey: ["brand", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getBrand(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useCreateBrand() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<Brand, Error, CreateBrandArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createBrand(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["brands"] }),
  });
}

export function useUpdateBrand() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<Brand | null, Error, UpdateBrandArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateBrand(args);
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["brands"] });
      qc.invalidateQueries({ queryKey: ["brand", vars.id.toString()] });
    },
  });
}

export function useDeleteBrand() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteBrand(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["brands"] }),
  });
}

// ── Board Members ────────────────────────────────────────────────────────────

export function useBoardMembers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<BoardMember[]>({
    queryKey: ["boardMembers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listBoardMembers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateBoardMember() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<BoardMember, Error, CreateBoardMemberArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createBoardMember(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["boardMembers"] }),
  });
}

export function useUpdateBoardMember() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<BoardMember | null, Error, UpdateBoardMemberArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateBoardMember(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["boardMembers"] }),
  });
}

export function useDeleteBoardMember() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteBoardMember(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["boardMembers"] }),
  });
}

// ── Jobs ─────────────────────────────────────────────────────────────────────

export function useJobs() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listJobs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useActiveJobs() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Job[]>({
    queryKey: ["jobs", "active"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listActiveJobs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useJob(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Job | null>({
    queryKey: ["job", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getJob(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useCreateJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<Job, Error, CreateJobArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.createJob(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["jobs"] }),
  });
}

export function useUpdateJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<Job | null, Error, UpdateJobArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateJob(args);
    },
    onSuccess: (_data, vars) => {
      qc.invalidateQueries({ queryKey: ["jobs"] });
      qc.invalidateQueries({ queryKey: ["job", vars.id.toString()] });
    },
  });
}

export function useDeleteJob() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<boolean, Error, bigint>({
    mutationFn: async (id) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.deleteJob(id);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["jobs"] }),
  });
}

// ── Applications ─────────────────────────────────────────────────────────────

export function useSubmitApplication() {
  const { actor } = useActor(createActor);
  return useMutation<JobApplication, Error, SubmitApplicationArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitApplication(args);
    },
  });
}

export function useApplicationsForJob(jobId: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<JobApplication[]>({
    queryKey: ["applications", jobId?.toString()],
    queryFn: async () => {
      if (!actor || jobId === undefined) return [];
      return actor.listApplicationsForJob(jobId);
    },
    enabled: !!actor && !isFetching && jobId !== undefined,
  });
}

// ── Contact ───────────────────────────────────────────────────────────────────

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  return useMutation<ContactSubmission, Error, SubmitContactArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContact(args);
    },
  });
}

// ── Firm Info ─────────────────────────────────────────────────────────────────

export function useFirmInfo() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<FirmInfo>({
    queryKey: ["firmInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          heroHeadline: "Building Enduring Value",
          heroCopy:
            "We partner with exceptional management teams to build transformative companies.",
          missionStatement:
            "Our mission is to create lasting value through disciplined investment and operational excellence.",
          investmentStrategy:
            "We focus on mid-market businesses with strong fundamentals and clear paths to growth.",
          statsJson: JSON.stringify([
            { label: "Assets Under Management", value: "$4.2B" },
            { label: "Portfolio Companies", value: "10+" },
            { label: "Years of Excellence", value: "5yrs+" },
            { label: "Realized Returns", value: "3.2x" },
          ]),
        };
      }
      return actor.getFirmInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateFirmInfo() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<FirmInfo, Error, UpdateFirmInfoArgs>({
    mutationFn: async (args) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateFirmInfo(args);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["firmInfo"] }),
  });
}
